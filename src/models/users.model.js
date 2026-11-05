import { readUsers, writeUsers } from '../db.js';

export const usersModel = {
  async findAll() {
    return (await readUsers()).filter(u => !u.deletedAt);
  },
  
  async findById(id) {
    const user = (await readUsers()).find(x => x.id === id && !x.deletedAt);
    return user || null;
  },

    async create(data) {
    const users = await readUsers()
    const id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1

    const novo = { id, ...data, deletedAt: null }

    users.push(novo)
    await writeUsers(users)

    return novo
  },

    async delete(id) {
    const users = await readUsers()
    const user = users.find(u => u.id === id && !u.deletedAt)

    if (!user) return null

    user.deletedAt = new Date().toISOString()

    await writeUsers(users)
    return user
  }
}