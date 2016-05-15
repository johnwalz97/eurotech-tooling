var ToolingApp = angular.module('ToolingApp', ['ngRoute']);

//configure routes
ToolingApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/home.html',
            // controller: 'searchController'
        })
        .when('/search', {
            templateUrl: '/partials/tools.html',
            controller: 'toolsController'
        })
        .when('/show', {
            templateUrl: '/partials/show.html',
            controller: 'toolController'
        })
        .when('/cart', {
            templateUrl: '/partials/cart.html',
            controller: 'cartController'
        })
        .when('/thanks', {
            templateUrl: '/partials/thank_you.html',
        })
        .when('/edit', {
            templateUrl: '/partials/edit.html',
            controller: 'editController'
        })
        .when('/create', {
            templateUrl: '/partials/edit.html',
            controller: 'createController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

//add directives
ToolingApp.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
});