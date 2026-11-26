import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const usersModel = {
async findAll(page, limit, q, sort, order) {  const skip = (page - 1) * limit
const where = {
  deletedAt: null,
  ...(q && {
    OR: [
      { nome: { contains: q, mode: 'insensitive' } },
      { email: { contains: q, mode: 'insensitive' } }
    ]
  })
}

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: limit,
      orderBy: { [sort]: order }
    }),
    prisma.user.count({ where })
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