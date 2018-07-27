// The controller is where we set up our DOM related routes.  For this project we have 
// a route that displays all of the items in our table using res.render (get), and routes that change the data
// req.body (post).  Both post routes then res.redirect to the res.render (get).


var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js')

router.get("/", function(req, res) {
	burger.allBurgers(function(burger_data) {
		res.render("index", {burger_data});
	})
});

router.post("/burger/update", function(req, res) {
	burger.update(req.body.burger_id, function(result) {
		res.redirect("/");
	})
});

router.post("/burger/create", function(req, res) {
	burger.create(req.body.burger_name, function(result) {
		res.redirect('/');
	})
})

module.exports = router;