const sortTasks = async (tasks) => {
  tasks.sort((task, nextTask) => {
    if (task.isCheck < nextTask.isCheck) {
      return -1;
    } 
    if (task.isCheck === nextTask.isCheck) {
      return;
    }
    return 1;
  });
};

module.exports = {
  sortTasks
};