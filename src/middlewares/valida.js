import { z } from 'zod'

export function valida(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      // erro de FORMATO é culpa de quem enviou → 400, não 500
      return res.status(400).json({ erro: z.flattenError(result.error) })
    }

    req.body = result.data // corpo validado e saneado segue viagem
    next()
  }
}