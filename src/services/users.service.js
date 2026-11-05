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

//quase que esqueço de  de verificar quando um user não existe, para não dar erro 500, mas sim 404
// async deleteUser(id) {
//    return usersModel.delete(id)
//},
//tava desse jeito

  async deleteUser(id) {
  const user = await usersModel.delete(id)

  if (!user) {
    const erro = new Error('Usuário não encontrado')
    erro.status = 404
    throw erro
  }

  return user
},

async updateUser(id, data) {
  const user = await usersModel.update(id, data)

  if (!user) {
    const erro = new Error('Usuário não encontrado')
    erro.status = 404
    throw erro
  }

  return user
},

async patchUser(id, data) {
  const user = await usersModel.patch(id, data)

  if (!user) {
    const erro = new Error('Usuário não encontrado')
    erro.status = 404
    throw erro
  }

  return user
}}