//Variables
var tools = require("../controllers/tools.js");

//export module
module.exports = function(app){
    //Routes
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.get("/", function(req, res){
        res.render('desktop')
    })
    app.post("/search/text", function(req, res) {
        tools.text_search(req, res);
    })
    app.post("/search", function(req, res) {
        tools.search(req, res);
    })
    app.post("/showTool", function(req, res){
        tools.show(req, res);
    })
    app.get("/create", function(req, res){
        tools.create(req, res);
    })
    app.post("/edit", function(req, res){
        tools.edit(req, res);
    })
    app.get("/fix", function(req, res) {
        tools.fix(req, res);
    })
    app.post("/save", function(req, res) {
        tools.save(req, res);
    })
}