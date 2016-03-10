ToolingApp.controller("toolController", function($scope, $location, searchFactory){
    $scope.tool_detail = searchFactory.get_tool_detail();
})