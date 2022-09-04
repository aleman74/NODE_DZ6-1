// Общий обработчик ошибок
module.exports = (error, req, res, next) => {
    res.status(500);
//    res.json({error});
    res.json({code: 500, description: error});
}