// src/routes/users.routes.js
import { validaId } from '../middlewares/validaId.js'
import { Router } from 'express'
import { userSchema, userPatchSchema } from '../schemas/users.schema.js'
import { listUsers, getUser, createUser, updateUser, deleteUser, patchUser } 
from '../controllers/users.controller.js'

const router = Router()
import { valida } from '../middlewares/valida.js'

router.get('/', listUsers)
router.get('/:id', validaId, getUser)
router.post('/', valida(userSchema), createUser)
router.put('/:id', validaId, valida(userSchema), updateUser)
router.patch('/:id', validaId, valida(userPatchSchema), patchUser)
router.delete('/:id', validaId, deleteUser)

export default router