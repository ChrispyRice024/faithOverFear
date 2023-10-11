const express = require('express')
const router = express.Router()
const {Item} = require('../models')

router.get('/', async (req, res) => {
    try{
        const itemData = await Item.findAll()
        res.status(200).json(itemData)
    }catch(err){
        res.status(400).json({msg:'There was a problem getting the data', err})
    }
})

module.exports = router