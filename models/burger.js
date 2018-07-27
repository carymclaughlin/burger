// The model targets the table, and the properties that we need to complete the functions
// Theoretically we could re-use orms on different tables

var orm = require("../config/orm.js");

var burger = {
	allBurgers: function(cb){
		orm.allBurgers("burgers", function(res){
			cb(res);
		})
	},

	update: function(id, cb) {
		orm.update("burgers", id, cb);
	},

	create: function(name, cb) {
		orm.create("burgers", name, cb);
	}
}

module.exports = burger;