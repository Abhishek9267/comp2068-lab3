var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wecome to my family' });
});
router.get('/neelam', function (req, res, next) {
    res.render('neelam', {message: 'She is my mother. Her hobby is singing. She is a fantastic singer. Whenever i call her, i tell her to sing for me.'});
});
router.get('/jeewan', function (req, res, next) {
    res.render('jeewan', { message: 'He is my father. He is a fantastic cook. He is my real mentor too.' });
});
router.get('/abhishek', function (req, res, next) {
    res.render('abhishek', { message: 'That is me, I do not know about myself. I am on a journey to discover "Who am I in reality"' });
});


module.exports = router;
