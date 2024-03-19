const service = require('./tickets.service')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')

async function list (req, res) {
  const data = await service.list()
  res.json({ data })
}

async function create (req, res) {
  try {
    const data = await service.create(req.body.data)
    res.status(201).json({ data })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error Creating Ticket!"})
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create)
}
