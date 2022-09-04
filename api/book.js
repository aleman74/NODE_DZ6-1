const express = require('express');
const router = express.Router();
module.exports = router;

const {data_obj, Book} = require('../data/book');

router.get('/', (req, res) => {
    res.json(data_obj.books);
});

router.get('/:id', (req, res) => {

    const {id} = req.params;

    const idx = data_obj.books.findIndex(el => el.id === id);

    if( idx !== -1) {
        res.json(data_obj.books[idx]);
    } else {
        res.status(404)
        res.json('Объект не найден');
    }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {title, description, authors, favorite, fileCover, fileName} = req.body;

    const idx = data_obj.books.findIndex(el => el.id === id);

    if (idx !== -1){
        data_obj.books[idx] = {
            ...data_obj.books[idx],
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName
        }

        res.json(data_obj.books[idx]);
    } else {
        res.status(404);
        res.json('Объект не найден');
    }
});

router.post('/', (req, res) => {

    const {title, description, authors, favorite, fileCover, fileName} = req.body;

    const newBook = new Book(title, description, authors, favorite, fileCover, fileName);
    data_obj.books.push(newBook);

    res.status(201);
    res.json(newBook);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const idx = data_obj.books.findIndex(el => el.id === id);
        
    if(idx !== -1){
        data_obj.books.splice(idx, 1)
        res.json(true)
    } else {
        res.status(404);
        res.json('Объект не найден');
    }
});
