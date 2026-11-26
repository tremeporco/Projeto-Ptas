import { z } from 'zod'

export const userSchema = z.object({
  nome: z.string().min(3, 'Nome muito curto'),
  email: z.string().email('E-mail inválido'),
  senha: z.string().min(6, 'Senha muito curta')
})

export const userPatchSchema = userSchema.partial().refine(
  data => Object.keys(data).length > 0,
  'Envie pelo menos um campo para atualizar'
)