const express = require('express')
const cors = require('cors')
const data = require('./data/data.js')
const app = express()


app.use(cors())
app.use(express.json())


app.get('/',(req,res) =>{
    res.json(data)
})


app.get('/api/chat/:id',(req,res) =>{
    if(req.params){
        const fdata = data.find(item => item._id === req.params.id)
        res.send(fdata)

    }
    else{
        res.status(404)
    }
})

module.exports = {app}