const Task = require('../models/task');
const { validationString } = require('../../helpers/validation');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find()
    res.status(200).send({ data: allTasks });
  } catch (error) {
    res.status(400).send("Tasks fetch error");
  }
};

const createNewTask = async (req, res) => {
  try {
    const { text } = req.body;

    if (!req.body.hasOwnProperty('text')
      || !validationString(text)
    ) {
      throw new Error("Value was not added");
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
      || id === ''
    ) {
      throw new Error("Values were not added")
    }
    await Task.deleteOne({ _id });
    res.status(200).send('Task is delete');
  } catch (error) {
    res.status(400).send('Task delete error');
  }
};

const changeTextTask = async (req, res) => {
  try {
    const { text } = req.body;
    const { _id } = req.params;

    if (!req.params.hasOwnProperty('_id')
      || !req.body.hasOwnProperty('text')
      || !validationString(text)
      || id === ''
    ) {
      throw new Error("Values were not added");
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
    await Task.deleteMany();
    res.status(200).send("All Tasks deleted !");
  } catch (error) {
    res.status(400).send('Tasks delete error');
  }
};

const changeCheckBoxTask = async (req, res) => {
  try {
    const { isCheck } = req.body;
    const { _id } = req.params;

    if (!req.body.hasOwnProperty('isCheck'
      || !req.params.hasOwnProperty('_id'))
      || typeof isCheck !== 'boolean'
      || _id === ''
    ) {
      throw new Error("Values were not added");
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
