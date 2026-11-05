// src/db.js — carrega o "banco" em arquivo
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DB_PATH = join(__dirname, 'data.json')

// lê e devolve o array de usuários; se arquivo não existir, devolve []
export async function readUsers() {
  try {
    const raw = await readFile(DB_PATH, 'utf8')
    return JSON.parse(raw)
  } catch (err) {
    if (err.code === 'ENOENT') return []   // araquivo não existe ainda
    throw err                              // outro erro: propaga
  }
  
}
export async function writeUsers(users) {
  await writeFile(DB_PATH, JSON.stringify(users, null, 2), 'utf8')
}