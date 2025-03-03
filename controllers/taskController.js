const Task = require("../model/Task");

const addTask = async (req, res) => {
  const { taskname, priority, finishedDate, deadline, isComplete } = req.body;
  // const {created}=date.now
  try {
    const task = new Task({
      taskname,
      created: new Date(),
      priority,
      finishedDate,
      deadline,
      isComplete,
    });
    await task.save();
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
    const id=req.params.id
    const {isComplete}=req.body

    const task=await Task.findByIdAndUpdate(id,{isComplete},{new:true})

    if(!task){
      return res.status(404).json({error:'task not found'})
    }

    res.status(200).json({success:'task updated successfully'})
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message:'server error'})
    
  }
}
module.exports = { addTask, allTasks,updateTask };
