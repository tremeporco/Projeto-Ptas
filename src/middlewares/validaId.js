export function validaId(req, res, next) {
  const id = req.params.id

  if (!/^[a-f\d]{24}$/i.test(id)) {
    return res.status(400).json({
      erro: 'ID inválido'
    })
  }

  next()
}