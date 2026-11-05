export default function logger(req, res, next) {
  const inicio = Date.now()

  // 'finish' dispara quando a resposta já foi enviada ao cliente
  res.on('finish', () => {
    const ms = Date.now() - inicio
    console.log(`${req.method} ${req.url} — ${ms}ms`)
  })

  next() // o fluxo segue IMEDIATAMENTE, sem esperar o log
}

