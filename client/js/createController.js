ToolingApp.controller("createController", function($scope, $rootScope, $location, searchFactory){
    $.get(
        '/create',
        function(response){
            for(var p in response){
                if(response.hasOwnProperty(p))
                    response[p] = '';
            }
            delete response._id;
            $scope.tool = response;
            $scope.$apply();
        }
    )
    
    $scope.save = function(){
        $.post(
            '/save',
            $scope.tool,
            function(response){
                console.log(response);
                // searchFactory.show_detail(partNo, true);
            }
        )
    }
    
})