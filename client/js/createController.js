ToolingApp.controller("createController", function($scope, $rootScope, $location, searchFactory){
    $.get(
        '/create',
        function(response){
            for(var p in response){
                if(response.hasOwnProperty(p))
                    response[p] = '';
            }
            $scope.tool = response;
            $scope.$apply();
        }
    )
})