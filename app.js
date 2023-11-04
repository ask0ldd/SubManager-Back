const express = require('express')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')

// db
const sequelize = require('./config/database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())

