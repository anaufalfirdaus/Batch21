import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";
import upload from '../middleware/Multer'

const router = Router()

router.get('/',indexCtrl.RegCtrl.findAll)
router.get('/:id',indexCtrl.RegCtrl.findOne)
router.post('/',indexCtrl.RegCtrl.create)
router.put('/:id',indexCtrl.RegCtrl.update)
router.delete('/:id',indexCtrl.RegCtrl.deleted)
router.get('/sql/:id',indexCtrl.RegCtrl.qureySQL)
router.post('/image/',upload.upload,indexCtrl.RegCtrl.createImage)

export default router