ToolingApp.controller("toolController", function($scope, $window, $rootScope, $location, searchFactory){
    $scope.tool_detail = searchFactory.tool_detail;
    $scope.quantity;

    if($scope.tool_detail == null){
        $location.path('/');
    }
    
    if($(window).width() <= ($('#em').width() * 40)){
        var ElementTop = $('#view').position().top;
        $('body').animate({scrollTop: ElementTop},500);
    }

    $scope.add_to_cart = function(){
        var push = true;
        for(var i = 0; i < searchFactory.cart.length; i++){
            if(searchFactory.cart[i].id == $scope.tool_detail['MT Part No.']){
                searchFactory.cart[i].quantity = (parseInt(searchFactory.cart[i].quantity) + parseInt($scope.quantity || 1));
                window.localStorage['cart'] = JSON.stringify(searchFactory.cart);
                push = false;
            }
        }
        if(push){
            var cart_push = {id: $scope.tool_detail['MT Part No.'], title: $scope.tool_detail['Description (EN)'], quantity: ($scope.quantity || 1)};
            searchFactory.cart.push(cart_push);
            window.localStorage['cart'] = JSON.stringify(searchFactory.cart);
        }
        
        $rootScope.cart_quantity = searchFactory.cart.length;
        
        $window.location.assign('/#/cart');
    }
    
    $scope.edit = function(){
        searchFactory.edit_tool_id = $scope.tool_detail._id;
        $window.location.assign('/#/edit');
    }
    
    $scope.tab = 1;
})