const Task = require("../model/Task");
const User=require("../model/User")
const addTask = async (req, res) => {
  const { taskname, priority, finishedDate, deadline, isComplete } = req.body;
  // const {created}=date.now
  try {
    const user=await User.findById(req.userId)
    if(!user){
      return res.status(500).json({error:'user not found'})
    }

    const task = new Task({
      taskname,
      created: new Date(),
      priority,
      finishedDate,
      deadline,
      isComplete,
      user:user._id
    });
    const savedTask=await task.save();
    user.task.push(savedTask)
    await user.save()
    res.status(200).json({ success: "task created success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "servere error" });
  }
};

const allTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "servere error" });
  }
};

const updateTask=async(req,res)=>{
  try {
    const {id}=req.params
    const {isComplete}=req.body

    const task=await Task.findByIdAndUpdate(id,{isComplete},{new:true})

    if(!task){
      return res.status(404).json({error:'task not found'})
    }

    res.status(200).json({success:'task updated successfully',task})
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message:'server error',error})
    
  }
}

const deleteTask=async(req,res)=>{
  try {
    const {id}=req.params
    // const taskId=Number(id)
    console.log('from backend',typeof id);
    
    const task=await Task.findByIdAndDelete(id)
    if(!task){
      return res.status(404).json({message:"task not found"})
    }
    res.status(200).json({success:"task deleted successfully"})
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"server error",error})
    
  }
}
module.exports = { addTask, allTasks,updateTask,deleteTask };
