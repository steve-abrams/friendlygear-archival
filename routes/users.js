var express = require('express');
var router = express.Router();

var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
  // res.redirect('/login')
}
/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/show', ensureAuthenticated, function (req, res, next) {
  res.render('users/show');
});

module.exports = router;




// user: {
//   username: username
//   email: email
//   password: password
//   interests: [hiking, biking, etc];
//   gear: [
//     {
//     name: name,
//     description: description,
//     brand: brand,
//     age: age,
//     condition: condition,
//     category: [backpack, backpacking, camping, etc...]
//     availability: [{startdate: date, enddate: date}, {startdate: date, enddate:date}]
//     }
//     ]
//   }
//
// contract: {
//   seller: user_id;
//   buyer: user_id;
//   contractStart: date;
//   contractEnd: date;
//   gear: [
//     {
//     name: .....
//   }
//   ]
//   }
//
//   Do I straight repeat the gear data from one to the other, or do I have gear separate and use ids to eliminate duplication?
