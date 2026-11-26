// src/controllers/users.controller.js

// Coordena: recebe a requisição, chama o model e monta a resposta HTTP.
// src/controllers/users.controller.js

// Coordena: recebe a requisição, chama o model e monta a resposta HTTP.

// src/controllers/users.controller.js
// Coordena: recebe a requisição, chama o model e monta a resposta HTTP.
import { usersService } from '../services/users.service.js'
import { userDTO } from '../dtos/user.dto.js'
export async function listUsers(req, res, next) {
  try {
    const page = Math.max(1, Number(req.query.page) || 1)
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 10))
    const nome = req.query.nome || ''
    const sortPermitidos = ['nome', 'email', 'createdAt']
    const sort = sortPermitidos.includes(req.query.sort)
      ? req.query.sort
      : 'nome'
    const order = req.query.order === 'desc' ? 'desc' : 'asc'

    const resultado = await usersService.listUsers(
      page,
      limit,
      nome,
      sort,
      order
    )

    res.json({
      data: resultado.data.map(userDTO),
      meta: resultado.meta
    })
  } catch (err) {
    next(err)
  }
}

export async function createUser(req, res, next) {
  try {
    const novo = await usersService.createUser(req.body)
    res.status(201).json(userDTO(novo))
  } catch (err) {
    next(err)
  }
}

export async function getUser(req, res, next) {
  try {
    const user = await usersService.getUser(req.params.id)

    if (!user) {
      const erro = new Error('Usuário não encontrado')
      erro.status = 404
      throw erro
    }

    res.json(userDTO(user))
  } catch (err) {
    next(err)
  }
}

export async function deleteUser(req, res, next) {
  try {
    await usersService.deleteUser(req.params.id)
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}

export async function updateUser(req, res, next) {
  try {
    const user = await usersService.updateUser(
      req.params.id,
      req.body
    )
    res.json(userDTO(user))
  } catch (err) {
    next(err)
  }
}

export async function patchUser(req, res, next) {
  try {
    const user = await usersService.patchUser(
      req.params.id,
      req.body
    )
    res.json(userDTO(user))
  } catch (err) {
    next(err)
  }
} 