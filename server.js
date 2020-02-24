const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send("I");
});

mongoose.connect("mongodb+srv://admin:root@node-v001-nwj0m.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true  }
);
const PORTA = 90;

app.listen(PORTA);