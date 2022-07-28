const Task = require('../models/task');
const { validationString } = require('../../helpers/validation');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find().sort({ isCheck: 1 });
    res.status(200).send({ data: allTasks });
  } catch (error) {
    res.status(400).send("Task retrieval error");
  }
};

const createNewTask = async (req, res) => {
  try {
    const { text } = req.body;

    if (!req.body.hasOwnProperty('text')
      || !validationString(text)
    ) {
      throw new Error();
    }
    const newTask = new Task({ text });
    const savingNewTask = await newTask.save();
    res.status(200).send(savingNewTask);
  } catch (error) {
    res.status(400).send('Task sending error');
  }
};

const deleteTask = async (req, res) => {
  try {
    const { _id } = req.params;

    if (!req.params.hasOwnProperty('_id')
      || _id === ''
    ) {
      throw new Error();
    }
    const data = await Task.deleteOne({ _id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send('Task deletion error');
  }
};

const changeTextTask = async (req, res) => {
  try {
    const { text } = req.body;
    const { _id } = req.params;

    if (!req.params.hasOwnProperty('_id')
      || _id === ''
      || !req.body.hasOwnProperty('text')
      || !validationString(text)
    ) {
      throw new Error();
    }
    const task = await Task.findOneAndUpdate(
      { _id },
      { $set: { text } },
      { new: true }
    );
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send('Task change error');
  }
};

const deleteTasks = async (req, res) => {
  try {
    await Task.deleteMany({});
    res.status(200).send("All tasks have been deleted");
  } catch (error) {
    res.status(400).send('Tasks have been deleted');
  }
};

const changeCheckBoxTask = async (req, res) => {
  try {
    const { isCheck } = req.body;
    const { _id } = req.params;

    if (!req.params.hasOwnProperty('_id')
      || _id === ''
      || !req.body.hasOwnProperty('isCheck')
      || typeof isCheck !== 'boolean'
    ) {
      throw new Error();
    }
    const task = await Task.findOneAndUpdate(
      { _id },
      { $set: { isCheck } },
      { new: true }
    );
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send('Task change error');
  }
};

module.exports = {
  createNewTask,
  getAllTasks,
  deleteTask,
  deleteTasks,
  changeTextTask,
  changeCheckBoxTask
};
