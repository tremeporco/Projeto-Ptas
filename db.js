import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function conectarBanco() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB conectado!");
    } catch (error) {
        console.log("Erro ao conectar:", error.message);
        process.exit(1);
    }
}

export default conectarBanco;