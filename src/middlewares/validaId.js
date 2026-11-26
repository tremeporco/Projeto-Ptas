export function validaId(req, res, next) {
  const id = req.params.id

  if (!/^[a-f\d]{24}$/i.test(id)) {
    const erro = new Error('ID inválido')
    erro.status = 400
    erro.type = 'VALIDATION_ERROR'
    return next(erro)
  }

  next()
}