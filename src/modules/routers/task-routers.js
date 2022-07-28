const Router = require("express");
const router = new Router();

const {
  createNewTask,
  getAllTasks,
  deleteTask,
  deleteTasks,
  changeTextTask,
  changeCheckBoxTask
} = require('../controllers/task-controller');

router.get('/tasks', getAllTasks);
router.post('/tasks', createNewTask);
router.patch('/tasks/:_id/text', changeTextTask);
router.patch('/tasks/:_id/checkbox', changeCheckBoxTask);
router.delete('/tasks/:_id', deleteTask);
router.delete('/tasks', deleteTasks);

module.exports = router;
