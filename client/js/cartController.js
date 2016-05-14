ToolingApp.controller("cartController", function($scope, $rootScope, $location, searchFactory){
    $scope.cart = searchFactory.cart;
    
    if($scope.cart.length <= 0){
        cart_empty();
    } else {
        for(var i = 0; i < $scope.cart.length; i++){
            $scope.cart[i].quantity = parseInt($scope.cart[i].quantity);
        }
    }
    
    if($(window).width() <= ($('#em').width() * 40)){
        var ElementTop = $('#view').position().top;
        $('body').animate({scrollTop: ElementTop},500);
    }
    
    for(var i = 0; i < $scope.cart.length; i++){
        $scope.partNos += ($scope.cart[i].id + "(" + $scope.cart[i].quantity + "), ");
    }
    
    $scope.partNos = "";
    $scope.name = window.localStorage['eu_name'] ? window.localStorage['eu_name']  : "";
    $scope.name = window.localStorage['eu_email'] ? window.localStorage['eu_email'] : "";
    $scope.name = window.localStorage['eu_address'] ? window.localStorage['eu_address'] : "";
    $scope.name = window.localStorage['eu_city'] ? window.localStorage['eu_city'] : "";
    $scope.name = window.localStorage['eu_state'] ? window.localStorage['eu_state'] : "";
    $scope.name = window.localStorage['eu_zip'] ? window.localStorage['eu_zip'] : "";
})