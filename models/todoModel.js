const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    task:{
        type:String , 
        required:true
    },

    time:{
        type:String , 
        required:true
    }

})

module.exports = mongoose.model("todo" , todoSchema)