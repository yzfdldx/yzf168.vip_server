var express = require('express');
var router = express.Router();
const ajax = require('../public/js/ajax.js');
var app = express();



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send({});
  res.render('app');
});

module.exports = router;
