// src/routes/users.routes.js
import { validaId } from '../middlewares/validaId.js'
import { Router } from 'express'
import { listUsers, getUser, createUser, updateUser, deleteUser } 
from '../controllers/users.controller.js'

const router = Router()

import { userSchema } from '../schemas/users.schema.js'
import { valida } from '../middlewares/valida.js'


router.get('/', listUsers)
router.get('/:id', validaId, getUser)
router.post('/', valida(userSchema), createUser)
router.put('/:id', validaId, valida(userSchema), updateUser)
router.delete('/:id', validaId, deleteUser)

export default router