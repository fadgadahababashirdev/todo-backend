const todoSchema = require("../models/todoModel")


const getTask = async(req,res)=>{
    try {
        const task = await todoSchema.find()
        res.status(200).json({status:"success" , task})
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}

const createTask = async(req,res)=>{
    try {
        const task = await todoSchema.create({
            task:req.body.task ,
            time:req.body.time

        })
        res.status(201).json({status:"success" , task})
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}


const singleTask = async(req,res)=>{
    try {
        const task = await todoSchema.findById(req.params.id)
        res.status(200).json({status:"success" , task})
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}

const removeTask = async(req,res)=>{
    try {
        const task = await todoSchema.findByIdAndDelete(req.params.id)
        res.status(200).json({status:"task deleted successfully"})
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}


const updateTask = async (req, res) => {
  try {
    const task = await todoSchema.findByIdAndUpdate(req.params.id , {
        task:req.body.task , 
        time:req.body.time
    })
    res.status(200).json({status:"updated successfully" , task})
  } catch (error) {
    res.status(500).json({status:"failed" , message:error.message})
  }
};


module.exports = {getTask , createTask , removeTask ,singleTask ,updateTask}