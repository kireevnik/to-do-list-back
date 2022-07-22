require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const URL = process.env.URL;
const apiRotes = require('./src/modules/models/task');

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
        console.error('Connection not created !');
        process.exit(1);
  }
};

connect();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT} !`);
});

