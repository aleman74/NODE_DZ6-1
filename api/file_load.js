const express = require('express');
const router = express.Router();

const my_multer = require('../lib/multer');

const {data_obj} = require('../data/book');


router.post('/upload/:id', 
    my_multer.single('file'),       // Название POST параметра
    (req, res) => {
        if(req.file){
//            const {path, filename} = req.file;

            const {id} = req.params;
            const idx = data_obj.books.findIndex(el => el.id === id);

            if (idx !== -1){

                data_obj.books[idx] = {
                    ...data_obj.books[idx],
                    fileBook: req.file.path
                }
        
                res.json({fileBook: req.file.path});
            } else {
                res.status(404);
                res.json({code: 404, description: 'Объект не найден'});
            }
        }

        res.json();
    })

module.exports = router;
