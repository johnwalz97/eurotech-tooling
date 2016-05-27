//Setup
var mongoose = require('mongoose');
var Tool = mongoose.model('Tool');

//export module
module.exports = {
    fix: function(req, res){
        Tool.find({}, function(err, tools){
            if(!err){
                for(var i = 0; i < tools.length; i++){
                    if(tools[i]['Compatible machines']){
                        tools[i]['Compatible machines'] = tools[i]['Compatible machines'].replace(/(^,)|(,$)/g, "");
                        tools[i].save();
                    }
                }
                res.json("Done");
            }
        })
    },
    
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
                    if(!req.body.category || req.body.category == "All" || tools[i].Catagory == req.body.category){
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
    
    text_search: function(req, res){
        Tool.find({$text: {$search: req.body.text}}, {score: {$meta: "textScore"}}).sort({score:{$meta:"textScore"}}).exec(function(err, tools){
            if(err){
                res.json(err);
            } else {
                res.json(tools);
            }
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
    },
    
    edit: function(req, res){
        Tool.findOne({_id: req.body.id}, function(err, tool){
            if(err){
                console.log(err);
            } else {
                res.json(tool);
            }
        })
    },
    
    create: function(req, res){
        Tool.findOne({}, function(err, tool){
            if(err){
                console.log(err);
            } else {
                res.json(tool);
            }
        })
    },
    
    save: function(req, res){
        res.json(req.body);
        return;
        Tool.findOneAndUpdate({'MT Part No.': req.body['MT Part No.']}, req.body, {upsert: true, new: true, setDefaultsOnInsert: true}, function(err, tool){
            if(!err){
                res.json(result);
            } else {
                res.json(err);
            }
        })
    }
}
