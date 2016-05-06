ToolingApp.controller("searchController", function($scope, $location, searchFactory){
    $scope.searchParams = {};
    
    $scope.makes = ['Biglia'];
    $scope.models = [{
                        value: 'B1200',
                        label: 'B1200'
                    },{
                        value: 'B1250 16 STAZIONI',
                        label: 'B1250 16 STAZIONI'
                    },{
                        value: 'B301',
                        label: 'B301'
                    },{
                        value: 'B436',
                        label: 'B436'
                    },{
                        value: 'B445',
                        label: 'B445'
                    },{
                        value: 'B446',
                        label: 'B446'
                    },{
                        value: 'B465',
                        label: 'B465'
                    },{
                        value: 'B470',
                        label: 'B470'
                    },{
                        value: 'B501 Y/S',
                        label: 'B501 Y/S'
                    },{
                        value: 'B510',
                        label: 'B510'
                    },{
                        value: 'B545',
                        label: 'B545'
                    },{
                        value: 'B550',
                        label: 'B550'
                    },{
                        value: 'B565',
                        label: 'B565'
                    },{
                        value: 'B650',
                        label: 'B650'
                    },{
                        value: 'B658',
                        label: 'B658'
                    },{
                        value: 'B745',
                        label: 'B745'
                    },{
                        value: 'B750 16 STAZIONI',
                        label: 'B750 16 STAZIONI'
                    },{
                        value: 'B765',
                        label: 'B765'
                    },{
                        value: 'BV210',
                        label: 'BV210'
                    },{
                        value: 'BV315',
                        label: 'BV315'
                    }];
    $scope.categories = ['All', 'Driven', 'Static'];
    
    $scope.searchParams.make = $scope.makes[0];    
    $scope.searchParams.model = $scope.models[0].value;
    $scope.searchParams.category = $scope.categories[1];
    
    $scope.show_tool_detail = false;
    if(searchFactory.tool){
        $scope.tools = false;
        $scope.tool = searchFactory.tool;
    } else if(searchFactory.tools){
        $scope.tool = false;
        $scope.tools = searchFactory.tools;
    }
    $scope.search = function(){
        if($location.path() != '/'){
            $location.path('/');
        }
        $scope.tool = false;
        searchFactory.search(
            $scope.searchParams, 
            function(response){
                if(!response.error){
                    console.log(response);
                    if($(window).width() <= ($('#em').width() * 40))
                    var ElementTop = $('#view').position().top;
                    $('body').animate({scrollTop: ElementTop},1500);
                    $scope.tools = response;
                    $scope.$apply();
                }
            }
        );
    }
    $scope.show = function(page){
        searchFactory.searchPage(page, function(response){
            $scope.tools = false;
            $scope.tool = response;
            $scope.$apply();
            window.redrawTables();
        });
    }
    $scope.details = function(partNo){
        searchFactory.show_detail(partNo);
        $location.path('/show');
    }
    $scope.go_back = function(){
        $scope.tool = false;
        $scope.tools = searchFactory.tools;
    }
});