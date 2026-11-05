// src/controllers/users.controller.js

// Coordena: recebe a requisição, chama o model e monta a resposta HTTP.
import { usersModel } from '../models/users.model.js'
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
    const user = await usersModel.findById(Number(req.params.id))
    if (!user) {
      return res.status(404).json({ erro: 'não encontrado' })
    }
    res.json(user)
  } catch (err) {
    next(err)
  }
}



export async function deleteUser(req, res) {
  const id = Number(req.params.id)
  const users = await readUsers()
  const user = users.find(u => u.id === id)
  if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' })
  if (user.deletedAt) return res.status(409).json({ erro: 'Já removido' })

  user.deletedAt = new Date().toISOString()  // marca remoção
  await writeUsers(users)
  res.status(204).end()
})