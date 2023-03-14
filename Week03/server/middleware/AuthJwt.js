const Strategy = require('passport-local').Strategy
import jwt from 'jsonwebtoken'
import passport from 'passport'
import bcrypt from 'bcrypt'
import sequelize from 'sequelize'
import models from '../models/init-models'

const jwtSecret = 'myjwt'
const jwtOpts = { algorithm: 'HS256', expiresIn: '2d' }

passport.use(adminStartegy())
const authenticate = passport.authenticate('local', { session: false })

async function login(req, res, next) {
    const token = await sign({ username: req.user.username })
    const { userId, username, email, phone } = req.user
    res.cookie('jwt', token, { httpOnly: true })
    res.json({ profile: { userId, username, email, phone }, success: true, token: token })
}

async function sign(payload) {
    const token = await jwt.sign(payload, jwtSecret, jwtOpts)
    return token
}

function adminStartegy() {
    return new Strategy(async function (username, password, cb) {
        try {
            const result = await models.user.findOne({
                where: sequelize.or({ user_name: username }, { user_email: username })
            })
            const {user_name,user_email,user_phone,user_id,user_pass} = result.dataValues
            const compare = await bcrypt.compare(password,user_pass)
            if(compare) return cb(null,{username : user_name,userId : user_id, email:user_email, phone:user_phone})
        } catch (error) {
            console.log(error);
        }
        cb(null,false)
    })
}

module.exports = {
    authenticate,
    login: login
}