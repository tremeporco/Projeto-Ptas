// src/controllers/users.controller.js

// Coordena: recebe a requisição, chama o model e monta a resposta HTTP.
import { usersService } from '../services/users.service.js'

export async function createUser(req, res, next) {
  try {
    const novo = await usersService.createUser(req.body)
    res.status(201).json(novo)
  } catch (err) {
    next(err)
  }
}

export async function getUser(req, res, next) {
  try {
    const user = await usersService.getUser(Number(req.params.id))
    if (!user) {
  const erro = new Error('Usuário não encontrado')
  erro.status = 404
  throw erro
}
    res.json(user)
  } catch (err) {
    next(err)
  }
}



export async function deleteUser(req, res, next) {
  try {
    await usersService.deleteUser(Number(req.params.id))
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}
