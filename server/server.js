const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


    mongoose.connect(process.env.MONGO_CONNECT)

const routes = require('./routes')
app.use(routes)

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.listen(3001, () => {
    console.log('server is running')
})