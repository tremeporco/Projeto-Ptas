
export const productSchema = z.object({
  nome: z.string().min(3, 'Nome muito curto'),
  preco: z.number().positive('Preço deve ser positivo'),
  descricao: z.string().max(200, 'Descrição muito longa')
})