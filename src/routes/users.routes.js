// src/routes/users.routes.js
import { Router } from 'express'
import { listUsers, getUser, createUser, updateUser, deleteUser } 
from '../controllers/users.controller.js'

const router = Router()

import { userSchema } from '../schemas/users.schema.js'
import { valida } from '../middlewares/valida.js'


router.get('/', listUsers)
router.get('/:id', getUser)
router.post('/', valida(userSchema), createUser)
router.put('/:id', valida(userSchema), updateUser)
router.delete('/:id', deleteUser)

export default router