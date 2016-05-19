ToolingApp.controller("searchController", function($scope, $rootScope, $location, searchFactory){
    $rootScope.cart_quantity = searchFactory.cart.length;
    $scope.searchParams = {};
    $scope.text_search;
    $scope.cart_quantity = $rootScope.cart_quantity;
    
    $scope.makes = ['Biglia'];
    $scope.models = [{
                        value: 'B1200',
                        label: 'B1200'
                    },{
                        value: 'B1250 16 STAZIONI',
                        label: 'B1250 16 STAZIONI'
                    },{
                        value: 'B301',
                        label: 'B301'
                    },{
                        value: 'B436',
                        label: 'B436'
                    },{
                        value: 'B445',
                        label: 'B445'
                    },{
                        value: 'B446',
                        label: 'B446'
                    },{
                        value: 'B465',
                        label: 'B465'
                    },{
                        value: 'B470',
                        label: 'B470'
                    },{
                        value: 'B501 Y/S',
                        label: 'B501 Y/S'
                    },{
                        value: 'B510',
                        label: 'B510'
                    },{
                        value: 'B545',
                        label: 'B545'
                    },{
                        value: 'B550',
                        label: 'B550'
                    },{
                        value: 'B565',
                        label: 'B735'
                    },{
                        value: 'B650',
                        label: 'B650'
                    },{
                        value: 'B658',
                        label: 'B658'
                    },{
                        value: 'B745',
                        label: 'B745'
                    },{
                        value: 'B750 16 STAZIONI',
                        label: 'B750 16 STAZIONI'
                    },{
                        value: 'B765',
                        label: 'B765'
                    },{
                        value: 'BV210',
                        label: 'BV210'
                    },{
                        value: 'BV315',
                        label: 'BV315'
                    }];
    $scope.categories = ['All', 'Driven', 'Static'];
    
    $scope.searchParams.make = $scope.makes[0];    
    $scope.searchParams.model = $scope.models[0].value;
    $scope.searchParams.category = $scope.categories[1];
    
    $scope.tools = searchFactory.tools;
    
    setInterval(function(){
        if($scope.cart_quantity != $rootScope.cart_quantity){
            $scope.cart_quantity = $rootScope.cart_quantity;
            $scope.$apply();
        }}, 100)
    
    $scope.search = function(){
        if($location.path() != '/'){
            $location.path('/');
        }
        searchFactory.searched = true;
        
        searchFactory.search(
            $scope.searchParams, 
            function(response){
                if(!response.error){
                    console.log(response);
                    if($(window).width() <= ($('#em').width() * 40)){
                        var ElementTop = $('#view').position().top;
                        $('body').animate({scrollTop: ElementTop},500);
                    }
                    $scope.tools = response;
                    $scope.$apply();
                }
            }
        );
    }
    
    $scope.click_cart = function(){
        console.log($rootScope);
        console.log($scope.cart_quantity);
    }
    
    $scope.text_search_function = function(){
        if($location.path() != '/'){
            $location.path('/');
        }
        searchFactory.text_search(
            {text: $scope.text_search}, 
            function(response){
                if(!response.error){
                    console.log(response);
                    if($(window).width() <= ($('#em').width() * 40)){
                        var ElementTop = $('#view').position().top;
                        $('body').animate({scrollTop: ElementTop},500);
                    }
                    $scope.tools = response;
                    $scope.$apply();
                }
            }
        );
    }
    $scope.show = function(page){
        searchFactory.searchPage(page);
    }
});