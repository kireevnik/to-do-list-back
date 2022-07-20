const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const apiRotes = require('./src/modules/routes/routes');
app.use(cors());

const uri = 'mongodb+srv://FullTOPik:Nn08112002@cluster0.5arn2qd.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/', apiRotes);


app.listen(8080, () => {
    console.log("Example app listening on port 8080!");
});