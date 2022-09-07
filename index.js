const mongoose = require("mongoose");
const User = require("./user");

mongoose.connect("mongodb://localhost:27017/testDb")

userCreation()
async function userCreation(){
    try{
        const user = await User.create({
            name : "Sumukh",
            age:22,
            createdAt:Date.now(),
            updatedAt:Date.now(),
            address:{
               street:"15",
               city:"mysuru",
               state:"Karnataka"
            }
        },
            {
                name : "sandesh",
                age : 22,
                createdAt:Date.now(),
                updatedAt:Date.now(),
                address:{
                    street:"18",
                    city:"udupi",
                    state:"karnataka"
                }
            
        },
        {
            name : "Prasad",
            age : 23,
            createdAt:Date.now(),
            updatedAt:Date.now(),
            address:{
                street:"19",
                city:"DK",
                state:"karnataka"
            }
        
    })
    console.log(user)
       
    }
    catch(e){
        console.log(e.error)
    }
   
}
