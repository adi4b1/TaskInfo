const express=require('express')
const taskRoute=require('../controllers/taskController')
const verifyToken=require('../middlewares/verifyToken')
const router=express.Router()

router.post('/add-task',verifyToken,taskRoute.addTask)
router.get('/alltasks',taskRoute.allTasks)
router.delete('/deletetask/:id',verifyToken,taskRoute.deleteTask)
router.patch('/update-task/:id',verifyToken,taskRoute.updateTask)
module.exports=router