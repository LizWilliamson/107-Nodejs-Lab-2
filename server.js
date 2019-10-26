var http = require("http");
var express = require("express");

var app = express();



// CONFIGURATION 

// enable CORS security

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-ALlow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "ORigin, X-Requested_With, Content-Type, Accept");
    next();
});



// (read req body as object)
var bodyParser = require("body-parser");
app.use(bodyParser.json());


// WEB SERVER  FUNCTIONALITY

app.get("/", function(req, res){
    res.send("<h1 style='color:darkblue;'> Hello from my own server </h1>");
});

app.get("/contact", function(req, res){
    res.send("My contact info is: CLASSIFIED!");
});

app.get("/about", function(req, res){
    res.send("My voice is my passport, verify me");
});

app.listen(8080, function(){
    console.log("Server running at http://localhost:8080");
});

// API FUNCTIONALITY

var items = [];
var count = 0;

app.get('/api/products', function(req, res){
    console.log("User wants the catalog");
    res.json(items);
});

app.post('/api/products', function(req, res){
    console.log("User wants to save item");
    // read item
    var item = req.body;
    
    // assign unique id
    item.id = count
    count+=1;

    // store and send back the item
    items.push(item);
    res.send(item);
});