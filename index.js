import express from "express";
import conectarBanco from "./db.js";

const app = express();

app.use(express.json());

conectarBanco();

app.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API MoviLar funcionando!"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});