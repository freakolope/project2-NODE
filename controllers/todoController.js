var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});
var mongoose = require("mongoose");

var data = [{item: "get some milk"}, {item: "play apex"}, {item: "say hello to jei"}];

module.exports = function(app) {

	app.get("/todo", function(req, res) {

		res.render("todo", {todos: data});
	});

	app.post("/todo", urlencodedParser, function(req, res) {
		
		data.push(req.body);
		res.json(data);
	});

	app.delete("/todo/:item", function(req, res) {

		data = data.filter(function(todo) {

			return todo.item.replace(/ /g, '-') !== req.params.item;
		});

		res.json(data);
	});
};