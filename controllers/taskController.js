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
module.exports = { addTask, allTasks };
