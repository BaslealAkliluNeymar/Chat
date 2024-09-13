const userRouter = require('express').Router()
const userModel  = require('../models/users')
const mongo = require('mongoose')

userRouter.get('/', async (req,res) =>{
    const data = await userModel.findAll({})
    
    res.send(data)

})

userRouter.post('/', async (req,res) =>{
    const body = req.body

    const tobesaved = new userModel(
        {
            ...body
        }
    ) 


    const savedUser = tobesaved.save()
    
    res.send(savedUser)

})

module.exports = userRouter