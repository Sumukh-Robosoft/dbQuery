const mongoose = require("mongoose")
const addressSchema = new mongoose.Schema({
    street:String,
    city:String,
    state:String,
})
const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email :{
        type : String,
        required : true
    },
    createdAt:Date,
    updatedAt:Date,
    address:addressSchema,
    bestFriend:mongoose.SchemaTypes.ObjectId
    
})
module.exports = mongoose.model("User",userSchema)
 
