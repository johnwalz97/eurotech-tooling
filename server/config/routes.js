//Variables
var tools = require("../controllers/tools.js");

//export module
module.exports = function(app){
    //Routes
    app.get("/", function(req, res){
        res.render('desktop')
    })
    app.post("/search", function(req, res) {
        tools.search(req, res);
    })
    app.post("/showTool", function(req, res){
        tools.show(req, res);
    })
}