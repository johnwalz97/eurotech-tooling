ToolingApp.controller("editController", function($scope, $rootScope, $location, searchFactory){
    tool_id = searchFactory.edit_tool_id;
    
    $.post(
        '/edit',
        {id: tool_id},
        function(response){
            console.log(response);
            $scope.tool = response;
            $scope.$apply();
        },
        'json'
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