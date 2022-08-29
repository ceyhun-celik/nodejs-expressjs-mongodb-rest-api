const express = require('express')
const mongoose = require('mongoose')
const body_parser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express()
app.use(body_parser.json())
app.use(cors())

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DATABASE}/?retryWrites=true&w=majority`,
    e => console.log(e ? `Error: ${e}` : 'Connected to Database')
)

app.use('/products', require('./Routes/ProductsRouter'))

app.listen(5000, () => console.log('Server is running on 5000'))