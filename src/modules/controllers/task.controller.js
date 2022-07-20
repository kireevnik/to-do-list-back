const task = require('../../db/models/task/index');
const Task = require('../../db/models/task/index');

module.exports.getAllTasks = async (req, res, next) => {
    try {
        const getTask = await Task.find()
        res.send({data: getTask});
    } catch (error) {
        console.log("Ошибка GET");
    }
};

module.exports.createNewTask = async (req, res, next) => {
    try {
        const createTask = await new Task(req.body);
        const newTask = createTask.save();
        res.send(newTask);
    } catch (error) {

        console.log('Ошибка POST');
    }
};

module.exports.deleteTask = async (req, res, next) => {
    try {
        await Task.deleteOne({_id: req.params._id});
        res.send('Task is delete');
    } catch (error) {
        console.log('Ошибка DELETE');
    }
};

module.exports.infoUppdateTask = async (req, res, next) => {
    try {
       const changeTask = await Task.findOneAndUpdate({_id: req.params._id}, {$set: {isCheck: req.body.isCheck, text: req.body.text}});
       res.send(changeTask);
       console.log(req.params._id);
    } catch (error) {
        console.log('Ошибка PATH');
    }
};

module.exports.deleteAllTasks = async (req, res, next) => {
    try {
        await Task.deleteMany();
        res.send("All Tasks is deleted !");
    } catch (error) {
        
    }
};

