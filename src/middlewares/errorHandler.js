// deve ser o ÚLTIMO app.use do arquivo
function errorHandler(err, req, res, next) {
  console.error(err.stack) // o rastro completo vai para o terminal (log do dev)

  const status = err.status || 500
  res.status(status).json({ erro: err.message || 'Erro interno' })
}

app.use(errorHandler)