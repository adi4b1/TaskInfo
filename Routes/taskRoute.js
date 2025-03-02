const express=require('express')
const taskRoute=require('../controllers/taskController')

const router=express.Router()




router.post('/add-task',taskRoute.addTask)
router.get('/alltasks',taskRoute.allTasks)
module.exports=router