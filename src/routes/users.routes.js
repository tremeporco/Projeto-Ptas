// src/routes/users.routes.js
import { Router } from 'express'
import { listUsers, getUser } from '../controllers/users.controller.js'

const router = Router()

router.get('/', listUsers)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)



export default router