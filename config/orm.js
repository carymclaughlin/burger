//The ORM contains the variable sequal command functions.
// allBurgers selects all of the data from the table
// update, in this case, changes devoured condition to true for the id of the selection
// create adds a new row, the default devoured condition is false
var connection = require("../config/connection.js");

var orm = {
    allBurgers: function(tableInput, cb){
      connection.query("SELECT * FROM " +tableInput+";", function(error, result) {
        if(error) throw error;
        cb(result)
      })
    },
  
    update: function(tableInput, condition, cb) {
      connection.query("UPDATE "+tableInput+" SET devoured=true WHERE id="+condition+";", function(error, result){
        if(error)throw error;
        cb(result);
      })
    },
  
    create: function(tableInput, val, cb) {
      connection.query("INSERT INTO "+tableInput+" (burger_name)VALUES ('"+val+"');", function(error, result){
        if(error) throw error;
        cb(result);
      })
    }
  }
  module.exports = orm;