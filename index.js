const mongoose = require("mongoose");
const User = require("./user");

mongoose.connect("mongodb://localhost/testDb")

save()
async function save(){
    try{
        const user = await User.create({
            name : "Sumukh",
            age:22,
            email:{
                type : "sumukhravi@gmail.com"
            },
            createdAt:Date.now(),
            updatedAt:Date.now(),
            address:{
               street:"15",
               city:"mysuru",
               state:"Karnataka"
            },
        })
        console.log(user)
    }catch(e){
        console.log(e.error)
    }
   
}
