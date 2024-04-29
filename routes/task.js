const express = require('express');

const router = express.Router();
const {
  createTask,
  getTask,
  removeTask,
  updateTask,
  singleTask,
} = require('../controllers/todo');

router.get('/task' , getTask)
router.post('/task' , createTask)
router.get('/task/:id' , singleTask)
router.delete('/task/:id' , removeTask)
router.put('/task/:id' , updateTask)


module.exports = router