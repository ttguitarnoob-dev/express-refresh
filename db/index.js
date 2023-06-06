const mongoose = require('mongoose')
const MONGO_URI = 'mongodb://localhost:27017'

mongoose.connect(MONGO_URI)
.then(() => console.log(`Mongoose dbatase connected successfully`))
.catch((err) => console.log(`${err} happened when badatease tried to connect`))

mongoose.connection.on('error', err => {
    console.log(`I don't know what ${err} means`)
})


, () => {
    console.log(`Mongo dabatase is coneced`)
}