const express = require('express')
const languages = express.Router()
const Language = require('../models/language')

// index
languages.get('/', (req, res) => {
    Language.find()
    .then(foundLanguages => {
        res.json(foundLanguages)
    })
})

// show
languages.get('/:name', (req, res) => {
    Language.findOne({name: req.params.name .toLocaleLowerCase()})
    .then(foundLanguage => {
        res.json(foundLanguage)
    })

})



module.exports = languages
