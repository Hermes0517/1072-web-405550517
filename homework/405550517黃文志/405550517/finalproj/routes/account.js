var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('account', { title: 'Express' });
// });


const accountController = require('../controllers/account')
router.get('/',accountController.getAll)

module.exports = router;
