const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('./db')

//Controllers
const smellController = require('./controllers/smell')

//Config
const port = 3000
acceptList = ["127.0.0.1:27017", "10.24.24.112"]
const options = {
    oritin: function(origin, callback){
        console.log('origin', origin)
        if (acceptList.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback( new Error ("Not allowed by cors, bro, cors is annoying"))
        }
    }
}

//Middleware
app.use(cors(options))
app.use(express.json())
app.use('/', smellController)

//Home Route
app.get('/', (req, res) => {
    res.json({
        status: 200,
        body: "I'm impressed"
    })
})


//Server Start
 app.listen(port, host="0.0.0.0", () => {
    console.log(`App started on port ${port}`)
 })