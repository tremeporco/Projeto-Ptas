// src/services/users.service.js
// Regras de negócio: aqui mora o que o SISTEMA decide.

import { usersModel } from '../models/users.model.js'

export const usersService = {
async listUsers(page, limit, q, sort, order) {
  return usersModel.findAll(page, limit, q, sort, order)
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

  async getUser(id) {
    return usersModel.findById(id)
  },

  async deleteUser(id) {
    const user = await usersModel.delete(id)

    if (!user) {
    const erro = new Error('Usuário não encontrado')
erro.status = 404
erro.type = 'NOT_FOUND'
throw erro
    }

    return user
  },

  async updateUser(id, data) {
    const user = await usersModel.update(id, data)

    if (!user) {
   const erro = new Error('Usuário não encontrado')
erro.status = 404
erro.type = 'NOT_FOUND'
throw erro
    }

    return user
  },

  async patchUser(id, data) {
    const user = await usersModel.patch(id, data)

    if (!user) {
    const erro = new Error('Usuário não encontrado')
erro.status = 404
erro.type = 'NOT_FOUND'
throw erro
    }

    return user
  }
}