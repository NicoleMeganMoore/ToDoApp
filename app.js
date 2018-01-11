var express = require("express"),
    app     = express(),
    router  = express.Router(),
    port    = process.env.PORT || 3000,
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

var todoRoutes = require("./routes/todos");

var url = "mongodb://NicoleMoore:password@ds251287.mlab.com:51287/todo-app-";
mongoose.connect(url, {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res){
    res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

app.listen(port, function(){
    console.log("app is running on port " + port);
});