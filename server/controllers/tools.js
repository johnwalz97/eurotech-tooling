//Setup
var mongoose = require('mongoose');
var Tool = mongoose.model('Tool');

//export module
module.exports = {
    search: function(req, res){
        if(req.body.make == null || req.body.model == null || req.body.make == '' || req.body.model == ''){
            res.json({error: 'Incomplete search parameters...'});
            return;
        }
        var make = 'BIGLIA';
        var result = [];
        var pages = [];
        Tool.find({'OEM': make}, function(err, tools){
            for(var i = 0; i < tools.length; i++){
                if(tools[i]['Compatible machines'].indexOf(req.body.model) >= 0){
                    if(tools[i].Catagory == req.body.category || req.body.category == ""){
                        if(pages.indexOf(tools[i]['Catalogue page']) == -1){
                            result.push(tools[i]);
                            pages.push(tools[i]['Catalogue page']);
                        }
                    }
                }
            }
            res.json(result);
        });
    },
    
    show: function(req, res){
        Tool.find({'Catalogue page': req.body.page}, function(err, tools){
            if(err){
                console.log(err);
            } else {
                res.json(tools);
            }
        })
    }
}