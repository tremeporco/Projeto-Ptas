import { PrismaClient } from '../generated/prisma/client.js'

const prisma = new PrismaClient()

export const usersModel = {
  async findAll() {
    return prisma.user.findMany({
      where: { deletedAt: null }
    })
  },

  async findById(id) {
    return prisma.user.findFirst({
      where: { id, deletedAt: null }
    })
  },

  async create(data) {
    return prisma.user.create({
      data
    })
  },

  async delete(id) {
    const user = await prisma.user.findFirst({
      where: { id, deletedAt: null }
    })

    if (!user) return null

    return prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() }
    })
  },

  async update(id, data) {
    const user = await prisma.user.findFirst({
      where: { id, deletedAt: null }
    })

    if (!user) return null

    return prisma.user.update({
      where: { id },
      data
    })
  },

  async patch(id, data) {
    const user = await prisma.user.findFirst({
      where: { id, deletedAt: null }
    })

    if (!user) return null

    return prisma.user.update({
      where: { id },
      data
    })
  }
}