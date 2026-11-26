import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const usuarios = [
  { nome: 'Ana Souza', email: 'ana@example.com', senha: '123456' },
  { nome: 'Bruno Lima', email: 'bruno@example.com', senha: '123456' },
  { nome: 'Carlos Mendes', email: 'carlos@example.com', senha: '123456' },
  { nome: 'Julia Santos', email: 'julia@example.com', senha: '123456' },
  { nome: 'Pedro Oliveira', email: 'pedro@example.com', senha: '123456' },
  { nome: 'Mariana Costa', email: 'mariana@example.com', senha: '123456' },
  { nome: 'Lucas Ferreira', email: 'lucas@example.com', senha: '123456' },
  { nome: 'Beatriz Rocha', email: 'beatriz@example.com', senha: '123456' },
  { nome: 'Gabriel Alves', email: 'gabriel@example.com', senha: '123456' },
  { nome: 'Larissa Martins', email: 'larissa@example.com', senha: '123456' }
]

async function main() {
  for (const usuario of usuarios) {
    await prisma.user.upsert({
      where: { email: usuario.email },
      update: {},
      create: usuario
    })
  }

  console.log('Seed executado com sucesso!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())