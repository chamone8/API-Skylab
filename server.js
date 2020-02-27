const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors  = require('cors');

const app = express();
app.use(express.json());//server para o add receber json
app.use(cors());

mongoose.connect("mongodb+srv://admin:root@node-v001-nwj0m.mongodb.net/Produtos?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true  });
requireDir('./src/models');


const produto = mongoose.model('product');



app.use('/api', require("./src/Routes"));

app.listen(90);


