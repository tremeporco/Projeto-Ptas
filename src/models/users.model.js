// src/models/users.model.js — versão SQLite (esboço)
import db from '../db-sqlite.js'

export const usersModel = {
  async findAll() {
    return db.prepare('SELECT * FROM users WHERE deleted_at IS NULL').all()
  },
  async findById(id) {
    return db.prepare('SELECT * FROM users WHERE id = ? AND deleted_at IS NULL').get(id) || null
  },
  async create(data) {
    const info = db.prepare('INSERT INTO users (nome, email) VALUES (?, ?)')
      .run(data.nome, data.email)
    return { id: info.lastInsertRowid, ...data }
  },
}