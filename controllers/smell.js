const express = require('express')
const { update } = require('../models/stinkers')
const Stinker = require('../models/stinkers')
const router = express.Router()

//Routes

//Get
router.get('/', async (req, res) => {
    try{
        // const allSmells = await Stinker.find()
        // console.log('all smells', allSmells)
        // res.json(allSmells)
        res.send('index smell')

    } catch(err) {
        res.json(`${err} happened in the stupid get route`)
    }
})

//Create
router.post('/', async (req, res) => {
    try{
        console.log('new smell', req.body)
        const newSmell = await Stinker.create(req.body)
        res.json(newSmell)
    } catch(err){
        res.json(`${err} happened in the create route`)
    }
})

module.exports = router