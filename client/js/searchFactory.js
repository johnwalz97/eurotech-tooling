ToolingApp.factory("searchFactory", function($location){
    var factory = {};
    
    factory.tool = null;
    factory.tools = null;
    factory.tool_detail = null;

    factory.search = function(searchParams, callback){
        $.post(
            '/search',
            searchParams,
            function(response){
                factory.tools = response;
                callback(response);
            },
            'json'
        )
    }
    
    factory.showTools = false;
    
    factory.searchPage = function(page, callback){
        $.post(
            '/showTool',
            {page: page},
            function(response){
                factory.tool = response;
                callback(response);
            },
            'json'
        )
    }
    factory.show_detail = function(partNo){
        for(var i = 0; i < factory.tool.length; i++){
            if(factory.tool[i]['MT Part No.'] == partNo){
                factory.tool_detail = factory.tool[i];
            }
        }
    }
    factory.get_tool_detail = function(){
        return factory.tool_detail;
    }
    
    return  factory;
})