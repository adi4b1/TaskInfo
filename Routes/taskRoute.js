const express=require('express')
const taskRoute=require('../controllers/taskController')

const router=express.Router()

router.post('/add-task',taskRoute.addTask)
router.get('/alltasks',taskRoute.allTasks)
router.delete('/deletetask/:id',taskRoute.deleteTask)
router.patch('/update-task/:id',taskRoute.updateTask)
module.exports=router