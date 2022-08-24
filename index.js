const express = require('express');

const app = express();
module.exports.app = app;

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT);


// Обработчики запросов
require('./api/user');
require('./api/book');
