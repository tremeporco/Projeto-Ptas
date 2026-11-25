import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const usersModel = {
  async findAll(page, limit) {
    const skip = (page - 1) * limit

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: { deletedAt: null },
        skip,
        take: limit
      }),
      prisma.user.count({
        where: { deletedAt: null }
      })
    ])

    return {
      data: users,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    }
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