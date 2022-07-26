require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const apiRotes = require('./src/modules/routers/task-routers');
const { 
  URL,
  PORT
 } = require('./config');

app.use(cors());
app.use(express.json());
app.use('/', apiRotes);

const connect = () => {
  try {
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT} !`);
    });
  } catch {
    console.error('Connection not created!');
    process.exit(1);
  }
};

connect();
