// DEPENDENCIES
const { Op } = require('sequelize')

// REMEMBER - Router comes from Express Framework for Node.js
const events = require('express').Router() // Create the router and save to variable named bands 

const db = require('../models') // Require models folder and save to variable 'db'
const { Event } = db // Access database models thru db variable. Example, db.Band would access band.js

// ROUTES

// Route 1: Index "/" - GET
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['date', 'ASC']]
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Route 2: "/:id" - GET 
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvent)    
    } catch (error) {
        res.status(500).json(error)
    }
})

// Route 3: "/" - POST
events.post('/', async (req,res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Route 4: "/:id" - POST
events.put('/:id', async (req,res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Route 5: "/:id" - DELETE
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT

module.exports = events