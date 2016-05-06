ToolingApp.controller("toolController", function($scope, $location, searchFactory){
    $scope.tool_detail = searchFactory.get_tool_detail();
    $scope.cart = [];
    $scope.quantity;
    if($scope.tool_detail == null){
        $location.path('/');
    }
    $scope.go_back = function(){
        $location.path('/');
    }
    $scope.add_to_cart = function(){
        var push = true;
        for(var i = 0; i < $scope.cart.length; i++){
            if($scope.cart[i].id == $scope.tool_detail._id){
                $scope.cart[i].quantity += ($scope.quantity || 1);
                push = false;
            }
        }
        if(push)
            $scope.cart.push({id: $scope.tool_detail._id, quantity: ($scope.quantity || 1)})
        console.log($scope.cart);
    }
    $scope.tab = 1;
})