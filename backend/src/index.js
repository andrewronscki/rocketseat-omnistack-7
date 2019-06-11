const express = require('express');
const mongose = require('mongose');

const app = express();

mongose.connect('mongodb+srv://<username>:<password>@cluster0-kbv9a.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.get('/', (req,res) => {
    return res.send(`Olá ${req.query.name}`);
});

app.listen(3333);