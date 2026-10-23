import express from 'express';
import { z } from 'zod';

const app = express();
const PORT = 3000;

app.use(express.json());

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres")
});

app.get('/', (req, res) => {
  res.json({ status: "Rodando nativamente com Node.js!" });
});

app.post('/login', (req, res) => {
  const resultado = loginSchema.safeParse(req.body);
  if (!resultado.success) {
    return res.status(400).json({ erros: resultado.error.format() });
  }
  res.json({ mensagem: "Dados validados com sucesso!", dados: resultado.data });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado em http://localhost:${PORT}`);
});
