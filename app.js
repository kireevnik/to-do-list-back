const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const apiRotes = require('./src/modules/routers/task-routers');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const connect = () => {
  try {
    mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT} !`);
    });
  } catch {
    console.error('Connection not created !');
    process.exit(1);
  }
};

app.use(cors());
app.use(express.json());
app.use('/', apiRotes);
connect();
