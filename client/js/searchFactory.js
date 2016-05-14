ToolingApp.factory("searchFactory", function($location, $window){
    var factory = {};
    
    if(window.localStorage['cart']){
        factory.cart = JSON.parse(window.localStorage['cart']);
    } else {
        factory.cart = [];    
    }
    
    factory.searched = false;
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
    
    factory.text_search = function(searchParams, callback){
        $.post(
            '/search/text',
            searchParams,
            function(response){
                factory.tools = response;
                callback(response);
            },
            'json'
        )
    }
    
    factory.showTools = false;
    
    factory.searchPage = function(page){
        $.post(
            '/showTool',
            {page: page},
            function(response){
                factory.tool = response;
                $window.location.assign('/#/search');
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
        $window.location.assign('/#/show');
    }
    
    return  factory;
})