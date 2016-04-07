ToolingApp.controller("searchController", function($scope, $location, searchFactory){
    $scope.searchParams = {};
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
            window.redrawTables()
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