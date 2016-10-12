var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response)) NO
// use router.get instead

// READ ROUTES

// All the GET requests
router.get('/', function (req, res) {
  // all carts view under INDEX.EJS
  res.render('cart/index')
}).get('/new', function (req, res) {
  // NEW route under NEW.EJS
  res.render('cart/new')
}).get('/:id', function (req, res) {
  res.send('cart\'s ' + req.params.id + ' details')
}).get('/:id/edit', function (req, res) {
  res.send('edit cart\'s ' + req.params.id + ' details')
})

// the only POST request
router.post('/', function (req, res) {
  // get the post parameter
  // {
  // username: "primaulia",
  // userpassword: "test123"
  // }

  var posted_product = req.body.product
  var posted_price = req.body.price
  var posted_quantity = req.body.quantity
  var posted_user = req.body.user

  // res.send(req.body)

  res.send('posted product is: ' + posted_product + ' posted price: ' + posted_price + ' posted quantity is: ' + posted_quantity + ' posted user is: ' + posted_user)

})

// only PUT request
router.put('/:id', function (req, res) {
  res.send('edit cart' + req.params.id)
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete cart' + req.params.id)
})

module.exports = router
