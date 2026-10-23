import { readUsers, writeUsers } from '../db.js';

export const usersModel = {
  async findAll() {
    return (await readUsers()).filter(u => !u.deletedAt);
  },
  
  async findById(id) {
    const user = (await readUsers()).find(x => x.id === id && !x.deletedAt);
    return user || null;
  },