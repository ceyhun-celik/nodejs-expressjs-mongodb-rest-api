const express = require('express')
const Product = require('../Models/Product')

const app = express()

app.get('/', (req, res) => {
    Product.find()
        .then(products => {
            res.json(products)
        })
        .catch(error => {
            res.json(error)
        })
})

app.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            res.json(product)
        })
        .catch(error => {
            res.json(error)
        })
})

app.post('/', (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })

    product.save()

    res.json(product)
})

app.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })
    .then(product => {
        res.json(product)
    })
    .catch(error => {
        res.json(error)
    })
})

app.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => {
            res.json(product)
        })
        .catch(error => {
            res.json(error)
        })
})

module.exports = app