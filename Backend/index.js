const { app } = require('./app.js')
const mongo = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()
mongo.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('Connnected Succesfully')
    })
    .catch(() =>{
        console.log('Connection Not Working!')
    })


const PORT = 3001 || process.env.PORT
app.listen(PORT , (req,res) =>{
    console.log(`Listening on ${PORT}`)
})