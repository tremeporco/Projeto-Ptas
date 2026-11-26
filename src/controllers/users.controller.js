// src/controllers/users.controller.js

// Coordena: recebe a requisição, chama o model e monta a resposta HTTP.
export async function listUsers(req, res, next) {
  try {
    const page = Math.max(1, Number(req.query.page) || 1)
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 10))
    const q = req.query.q || ''

    const sortPermitidos = ['nome', 'email', 'createdAt']
    const sortQuery = req.query.sort || 'nome'
    const order = sortQuery.startsWith('-') ? 'desc' : 'asc'
    const campoSort = sortQuery.replace('-', '')

    const sort = sortPermitidos.includes(campoSort)
      ? campoSort
      : 'nome'

    const resultado = await usersService.listUsers(
      page,
      limit,
      q,
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