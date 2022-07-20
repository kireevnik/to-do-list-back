const Router = require("express");
const router =  new Router();

const {
    getAllTasks,
    createNewTask,
    deleteTask,
    infoUppdateTask,
    deleteAllTasks
} = require('../controllers/task.controller');

router.get('/allTasks', getAllTasks);
router.post('/newTask', createNewTask);
router.delete('/deleteTask', deleteTask);
router.delete('/deleteAllTasks', deleteAllTasks);
router.patch('/updateTask', infoUppdateTask);

module.exports = router;
