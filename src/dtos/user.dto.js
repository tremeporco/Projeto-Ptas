// DTO: define quais dados do usuário podem ser enviados ao cliente.
export function userDTO(user) {
  return {
    id: user.id,
    nome: user.nome,
    email: user.email,
    createdAt: user.createdAt
  }
}