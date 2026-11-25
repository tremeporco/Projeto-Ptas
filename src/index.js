// src/index.js
// Só monta o app: middlewares globais, routers e middleware de erro.
import express from 'express'
import cors from 'cors'
import usersRouter from './routes/users.routes.js'
import logger from './middlewares/logger.js'

const app = express()

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use(express.json()) // traduz o corpo JSON da requisição
app.use(logger)
app.use('/api/v1/users', usersRouter) // tudo que começa com /api/v1/users vai para o router de users

// Middleware global de erro: o "plano B" de qualquer next(err)
app.use((err, req, res, next) => {
  const status = err.status ?? 500
  res.status(status).json({ erro: err.message || 'Erro interno' })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})