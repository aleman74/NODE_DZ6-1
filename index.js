const express = require('express');

const user_router = require('./api/user');
const book_router = require('./api/book');
const file_load_router = require('./api/file_load');
const file_download_router = require('./api/file_download');

const error_404 = require('./error/error_404');
const error_handler = require('./error/error_handler');

const {PORT} = require('./config');

const app = express();
app.use(express.json());    // Иначе post параметры не видны в middleware
/*
app.use(express.urlencoded({
    extended: true
}));
*/

// ----------------------------------------
// Обработчики запросов
app.use('/api/books/', book_router);
app.use('/api/user/', user_router);
app.use('/api/books/', file_load_router);
app.use('/api/books/', file_download_router);

// Страница не найдена
app.use(error_404);

// Общий обработчик ошибок
app.use(error_handler);

// ----------------------------------------
// Запускаем сервер
app.listen(PORT);
// ----------------------------------------
