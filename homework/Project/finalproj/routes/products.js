var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('products', { title: 'express' });
// });

const productsController = require('../controllers/products')
router.get('/',productsController.getAll)
module.exports = router;
