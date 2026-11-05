const { z } = require("zod");

const alunoSchema = z.object({
    nome: z.string().min(3, "Nome muito curto"),

    email: z.string().email("E-mail inválido")
});

module.exports = alunoSchema;