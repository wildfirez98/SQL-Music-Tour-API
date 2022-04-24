// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS

// Bands Controller

const bandsController = require('./controllers/bands_controller.js')
app.use('/bands', bandsController) // use bands_controller.js anytime a URL starts with /bands

// Events Controller

const eventsController = require('./controllers/events_controller.js')
app.use('/events', eventsController) // use events_controller.js anytime a URL starts with /events

// Stages Controller

const stagesController = require('./controllers/stages_controller.js')
app.use('/stages', stagesController) // use stages_controller.js anytime a URL starts with /stages


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})