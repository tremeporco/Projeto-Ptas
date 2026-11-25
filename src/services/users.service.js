// src/services/users.service.js
// Regras de negócio: aqui mora o que o SISTEMA decide.
import { usersModel } from '../models/users.model.js'

export const usersService = {
async listUsers() {
  return usersModel.findAll()
},

 async createUser(data) {
  try {
    return await usersModel.create(data)
  } catch (err) {
    if (err.code === 'P2002') {
      const erro = new Error('e-mail já cadastrado')
      erro.status = 409
      throw erro
    }

    throw err
  }
},