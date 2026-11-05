// src/controllers/users.controller.js
// Coordena: recebe a requisição, chama o model e monta a resposta HTTP.
import { usersModel } from '../models/users.model.js'

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
    const user = await usersModel.findById(Number(req.params.id))
    if (!user) {
      return res.status(404).json({ erro: 'não encontrado' })
    }
    res.json(user)
  } catch (err) {
    next(err)
  }
}

// src/controllers/users.controller.js (trecho)
export async function createUser(req, res, next) {
  try {
    const novo = await usersService.createUser(req.body)
    res.status(201).json(novo) // 201 = "criado com sucesso"
  } catch (err) {
    next(err)
  }
}

export async function createUser(req, res, next) {
  try {
    const novo = await usersService.createUser(req.body)
    res.status(201).json(novo)
  } catch (err) {
    next(err)
  }
}