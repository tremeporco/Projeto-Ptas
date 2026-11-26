import { z } from 'zod'

export function valida(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      const erro = new Error('Dados inválidos')
      erro.status = 400
      erro.type = 'VALIDATION_ERROR'
      erro.details = z.flattenError(result.error)

      return next(erro)
    }

    req.body = result.data // corpo validado e saneado segue viagem
    next()
  }
}