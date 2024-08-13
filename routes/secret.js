var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {
    console.log('accessing the secrets ...')
    next()
});

router.get('/', function (req, res) {
    res.send('Called me twice')
})
module.exports = router;
