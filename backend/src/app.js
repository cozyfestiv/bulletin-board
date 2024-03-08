const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '..', '.env') })

const express = require('express')
const cors = require('cors')

const app = express()

const cardsRouter = require('./cards/cards.router')
const notFound = require('./errors/notFound')
const errorHandler = require('./errors/errorHandler')

app.use(cors())
app.use(express.json())

app.use('/list', cardsRouter)
app.use(notFound)
app.use(errorHandler)

module.exports = app
