const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    text: String,
    isCheck: Boolean
});

module.exports = Task = mongoose.model('tasks', TaskSchema);