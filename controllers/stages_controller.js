// DEPENDENCIES
const { Op } = require('sequelize')

// REMEMBER - Router comes from Express Framework for Node.js
const stages = require('express').Router() // Create the router and save to variable named stages 

const db = require('../models') // Require models folder and save to variable 'db'
const { Stage } = db // Access database models thru db variable. Example, db.Band would access band.js

// ROUTES

// Route 1: Index "/" - GET
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Route 2: "/:id" - GET 
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundStage)    
    } catch (error) {
        res.status(500).json(error)
    }
})

// Route 3: "/" - POST
stages.post('/', async (req,res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Route 4: "/:id" - POST
stages.put('/:id', async (req,res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Route 5: "/:id" - DELETE
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT

module.exports = stages