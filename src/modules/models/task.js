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
router.delete('/tasks/:_id', deleteTask);
router.delete('/tasks', deleteTasks);
router.patch('/tasks/text/:_id', changeTextTask);
router.patch('/tasks/isCheck/:_id', changeCheckBoxTask);

module.exports = router;
