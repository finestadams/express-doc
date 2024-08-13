var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Hellow world');
});

router.get('/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
}, (req, res) => {
    res.send('Hello from B!')
})
  

// An array of callback functions can handle a route. For example:
const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  const cb2 = function (req, res) {
    res.send('Hello from C!')
}
router.get('/c', [cb0, cb1, cb2])


module.exports = router;
