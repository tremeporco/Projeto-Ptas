# Projeto-Ptas

API rest usando Node.js, Express e prisma Orm  , utilizando MongoDB.

## Tecnologias
- Node.js
- Express
- Prisma
- MongoDB
- Zod

## Instalação
npm install

ajuste o arquivo `.env` com o Db url do MongoDB.

## Executar
npm run dev
Servidor na porta 3000: `http://localhost:3000`

## Rotas

| Método| Rota                | Função             |
|-------|---------------------|--------------------|
| GET   |`/api/v1/users`      | Listar usuários    |
| GET   | `/api/v1/users/:id` | Buscar usuário     |
| POST  | `/api/v1/users`     | Criar usuário      |
| PUT   | `/api/v1/users/:id` | Atualizar usuário  |
| PATCH | `/api/v1/users/:id` | Atualização parcial|
| DELETE| `/api/v1/users/:id` | Excluir usuário    |

## Recursos
- Paginação
- Filtro por nome
- Ordenação
- Validação com Zod
- DTO pa    ra ocultar senha
- Soft delete
- Tratamento de erros

## Seed
Para cadastrar os usuários iniciais:

npm run seed
