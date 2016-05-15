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
    
    var eu_info = window.localStorage['eu_info'] ? JSON.parse(window.localStorage['eu_info']) : (window.localStorage['eu_info'] = []);
    
    $scope.bullshit = eu_info;
    
    $scope.$watch("bullshit", function(val){
        window.localStorage['eu_info'] = JSON.stringify(val);
    }, true);
    
    $scope.$watch("cart", function(val){
        for(var i = 0; i < val.length; i++){
            delete val[i].$$hashKey;
        }
        $scope.cart_string = JSON.stringify(val);
    }, true);
    
    $scope.remove = function(id){
        for(var i = 0; i < $scope.cart.length; i++){
            if($scope.cart[i].id == id){
                $scope.cart.splice(i, 1);
                $rootScope.cart_quantity--;
                searchFactory.cart.slice(i, 1);
                window.localStorage['cart'] = JSON.stringify(searchFactory.cart);
            }
        }
    }
    
    $scope.submit = function(){
        if($scope.bullshit.first_name == "" || $scope.bullshit.last_name == "" || $scope.bullshit.email == ""){
            alert("Please fill out first name, last name and email address.");
        }
        $scope.cart = [];
        searchFactory.cart = [];
        window.localStorage.removeItem('cart');
        $("#infusion-form").submit();
    }
})