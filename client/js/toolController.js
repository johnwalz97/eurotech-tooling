ToolingApp.controller("toolController", function($scope, $location, searchFactory){
    $scope.tool_detail = searchFactory.get_tool_detail();
    if($scope.tool_detail == null){
        $location.path('/');
    } else {
        $(document).foundation();
    }
    $scope.go_back = function(){
        $location.path('/');
    }
})