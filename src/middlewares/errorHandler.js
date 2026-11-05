const { z } = require("zod");

function errorHandler(error, req, res, next) {

    if (error instanceof z.ZodError) {
        return res.status(400).json({
            erro: "Dados inválidos",
            detalhes: error.issues
        });
    }

    res.status(error.status || 500).json({
        erro: error.message || "Erro interno"
    });
}

module.exports = errorHandler;