var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response)) NO
// use router.get instead

// READ ROUTES

// All the GET requests
router.get('/', function (req, res) {
  // all customers view under INDEX.EJS
  res.render('customers/index')
}).
get('/new', function (req, res) {
  // NEW route under NEW.EJS
  res.render('customers/new')
}).
get('/:id', function (req, res) {
  res.send('customer\'s ' + req.params.id + ' details')
}).
get('/:id/edit', function (req, res) {
  res.send('edit customer\'s ' + req.params.id + ' details')
})

// the only POST request
router.post('/', function (req, res) {
  // get the post parameter
  // {
  // username: "primaulia",
  // userpassword: "test123"
  // }
  var posted_name = req.body.name
  var posted_address = req.body.address
  var posted_phone = req.body.phone
  var posted_card = req.body.card

  // res.send(req.body)

  res.send('posted name is: ' + posted_name + ' posted address: ' + posted_address + ' posted phone is: ' + posted_phone + ' posted card is: ' + posted_card)
})

// only PUT request
router.put('/:id', function (req, res) {
  res.send('edit customer' + req.params.id)
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete customer' + req.params.id)
})

module.exports = router
