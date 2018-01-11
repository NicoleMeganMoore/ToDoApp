var mongoose = require("mongoose");
mongoose.set("debug", true);

var url = "mongodb://NicoleMoore:password@ds251287.mlab.com:51287/todo-app-";
mongoose.connect(url, {useMongoClient: true});
mongoose.Promise = global.Promise;

//mongoose.connect("mongodb://localhost/todo-api");

module.exports.Todo = require("./todo");