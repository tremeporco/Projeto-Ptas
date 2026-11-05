// src/controllers/users.controller.js
// Coordena: recebe a requisição, chama o model e monta a resposta HTTP.
import { usersModel } from '../models/users.model.js'

export async function listUsers(req, res, next) {
  try {
    const users = await usersModel.findAll()
    res.json(users) // 200 implícito
  } catch (err) {
    next(err) // entrega ao middleware global de erro (aula 07)
  }
}

export async function getUser(req, res, next) {
  try {
    const user = await usersModel.findById(Number(req.params.id))
    if (!user) {
      return res.status(404).json({ erro: 'não encontrado' })
    }
    res.json(user)
  } catch (err) {
    next(err)
  }
}