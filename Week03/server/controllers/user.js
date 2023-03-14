import bcrypt from 'bcrypt'
const SALT = 10


const signup = async (req, res) => {
    const { username, email, password, phone } = req.body

    const hashPassword = await bcrypt.hash(password, SALT)

    try {
        const result = await req.context.models.user.create({
            user_name: username,
            user_email: email,
            user_phone: phone,
            user_pass: hashPassword
        })
        const { user_name, user_email, user_phone } = result.dataValues
        return res.send({ user_name, user_email, user_phone })
    } catch (error) {
        return res.status(400).send(error)
    }
}

export default {
    signup
}