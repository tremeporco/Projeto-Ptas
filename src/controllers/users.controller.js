export async function getUser(req, res, next) {
  try {
    const user = await usersModel.findById(Number(req.params.id))
    if (!user) {
      return res.status(404).json({ erro: 'não encontrado' })
    }
    res.json(user)
  } catch (err) {
    next(err)
  }
}