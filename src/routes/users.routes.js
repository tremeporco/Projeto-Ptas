import { Router } from 'express'
import { listUsers, getUser } from '../controllers/users.controller.js'

const router = Router()

router.get('/:id', getUser)

export default router