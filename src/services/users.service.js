// src/services/users.service.js
// Regras de negócio: aqui mora o que o SISTEMA decide.
import { usersModel } from '../models/users.model.js'

export const usersService = {
  async createUser(data) {
    const emailJaExiste = (await usersModel.findAll())
      .some(u => u.email === data.email)

    if (emailJaExiste) {
      const erro = new Error('e-mail já cadastrado')
      erro.status = 409
      throw erro
    }

    return usersModel.create(data)
  },

  async getUser(id) {
    return usersModel.findById(id)
  },

  async deleteUser(id) {
    return usersModel.delete(id)
  },

  async updateUser(id, data) {
    return usersModel.update(id, data)
  },

  async patchUser(id, data) {
    return usersModel.patch(id, data)
  }
}