require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("mongoose running")
    })
    .catch((e) => console.log(e))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.use("/api",require('./routes/restaurants.routes'))


app.listen(process.env.PORT, ()=>console.log(`running on ${process.env.PORT}`))