const mongo = require('mongoose')



const userSchema = new mongo.Schema({
    name:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    age:{
        type:Number
    }
})


const userModel = mongo.model('userModel', userSchema)



module.exports = userModel