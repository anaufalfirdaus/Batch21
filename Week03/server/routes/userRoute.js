import {Router} from 'express'
import indexCtrl from '../controllers/indexCtrl'
import autJwt from '../middleware/AuthJwt'

const router = Router()

router.post('/signup',indexCtrl.UserCtrl.signup)
router.post('/signin',autJwt.authenticate,autJwt.login)

export default router