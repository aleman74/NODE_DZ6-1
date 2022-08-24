const {app} = require('../index');
const {data_obj, Book} = require('../data/book');


app.get('/api/books', (req, res) => {
//    console.log('get - /api/books');
    res.json(data_obj.books);
});

app.get('/api/books/:id', (req, res) => {
    const {id} = req.params;
    const idx = data_obj.books.findIndex(el => el.id === id);

    if( idx !== -1) {
        res.json(data_obj.books[idx]);
    } else {
        res.status(404)
        res.json('404 | страница не найдена');
    }
});

app.put('/api/books/:id', (req, res) => {
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
        res.status(404)
        res.json('404 | страница не найдена')
    }
});

app.post('/api/books/', (req, res) => {
//    console.log('post - /api/books');
//    console.log(req.body);

    const {title, description, authors, favorite, fileCover, fileName} = req.body;

    const newBook = new Book(title, description, authors, favorite, fileCover, fileName);
    data_obj.books.push(newBook);

    res.status(201);
    res.json(newBook);
});

app.delete('/api/books/:id', (req, res) => {
    const {id} = req.params;
    const idx = data_obj.books.findIndex(el => el.id === id);
        
    if(idx !== -1){
        data_obj.books.splice(idx, 1)
        res.json(true)
    } else {
        res.status(404)
        res.json('404 | страница не найдена')
    }
});
    