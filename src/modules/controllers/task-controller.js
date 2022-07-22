const Task = require('../index');
const { validationString } = require('../../helpers/validation');

const getAllTasks = async (req, res) => {
  try {
    const getTask = await Task.find()
    res.status(200).send({ data: getTask });
  } catch (error) {
    res.status(400).send("Error GET");
  }
};

const createNewTask = async (req, res) => {
  try {
    const { text } = req.body;
    if (!req.body.hasOwnProperty('text') || validationString(text)) {
      throw new Error("поле пустое или не тот тип");
    }
    const textTask = new Task({ text });
    const newTask = await textTask.save();
    res.status(200).send(newTask);

  } catch (error) {
    res.status(400).send('Error POST');
  }
};

const deleteTask = async (req, res) => {
  try {
    const { _id } = req.params;

    if (!req.params.hasOwnProperty('_id')
      || _id === ""
    ) {
      throw new Error("_id не определён")
    }
    await Task.deleteOne({ _id });
    await res.status(200).send('Task is delete');

  } catch (error) {
    res.status(400).send('Error DELETE');
  }
};

const changeTextTask = async (req, res) => {  //разделить на 2 isCheck, text
  try {
    const { text } = req.body;
    const { _id } = req.params;

    if (!req.body.hasOwnProperty('text')
      || !req.params.hasOwnProperty('_id')
      || validationString(text)
      || _id === ""
    ) {
      throw new Error(" не определёны поля")
    }
    const changeTask = await Task.findOneAndUpdate(
      { _id },
      { $set: { text } },
      { new: true });

    await res.status(200).send(changeTask);

  } catch (error) {
    res.status(400).send('Не удалось обновить текст');
  }
};

const deleteTasks = async (req, res) => {
  try {
    await Task.deleteMany();
    res.status(200).send("All Tasks is deleted !");
  } catch (error) {
    res.status(400).send('Не удалось удалить все задачи');
  }
};

const changeCheckBoxTask = async (req, res) => {
  try {
    const { isCheck } = req.body;
    const { _id } = req.params;
    if (!req.body.hasOwnProperty('isCheck')
      || !req.params.hasOwnProperty('_id')
      || _id === ''
      || isCheck === ''
    ) {
      throw new Error('Не Удалось изменить положение чек бокса !');
    }
    const newTask = await Task.findOneAndUpdate({ _id }, { $set: { isCheck } }, { new: true });
    await res.status(200).send(newTask);

  } catch (error) {
    res.status(400).send('Eror PATH');
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

