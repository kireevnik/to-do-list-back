const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  text: String,
  isCheck: {
    type: Boolean,
    default: false
  }
});

module.exports = Task = mongoose.model('Tasks', TaskSchema);