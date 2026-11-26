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

npx prisma db push
npx prisma generate


## Executar
npm start
Servidor na porta 3000: `http://localhost:3000`


## Recursos
- Paginação
- Filtro por nome
- Ordenação
- Validação com Zod
- DTO pa    ra ocultar senha
- Soft delete
- Tratamento de erros

## Rotas

| Método| Rota                | Função             |
|-------|---------------------|--------------------|
| GET   |`/api/v1/users`      | Listar usuários    |
| GET   | `/api/v1/users/:id` | Buscar usuário     |
| POST  | `/api/v1/users`     | Criar usuário      |
| PUT   | `/api/v1/users/:id` | Atualizar usuário  |
| PATCH | `/api/v1/users/:id` | Atualização parcial|
| DELETE| `/api/v1/users/:id` | Excluir usuário    |


### Paginação, pesquisa e ordenação

- `page`: número da página.
- `limit`: quantidade de usuários.
- `q`: pesquisa por nome ou e-mail.
- `sort`: campo de ordenação. Use `-` para ordem decrescente.

Exemplos:
/api/v1/users?page=1&limit=10
/api/v1/users?q=ana
/api/v1/users?sort=-nome


### Respostas e erros
200: sucesso.
201: usuário criado.
204: usuário excluído.
400: dados inválidos.
404: usuário não encontrado.
409: e-mail já cadastrado.
500: erro interno.


## curl

Listar user:

curl http://localhost:3000/api/v1/users

Cadastrar user:

curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"nome":"Ana Souza","email":"ana@email.com","senha":"123456"}'


## Seed
Para cadastrar os usuários iniciais:

npm run seed

