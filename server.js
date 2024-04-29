const express=  require("express")
const mongoose = require("mongoose")
const app = express()
const router = require("./routes/task")
require("dotenv").config()


app.use(express.json())
app.get("/"  , (req,res)=>res.send("app running successfully!"))



const connection = async()=>{
    try {
        const connect = await mongoose.connect(process.env.db)
        console.log("connected successfully")
        app.listen(process.env.port , ()=>console.log(`app running on http://localhost:${process.env.port}`))
    } catch (error) {
        console.log("app connection failed" , error)
    }
}

connection()

app.use('/' , router)