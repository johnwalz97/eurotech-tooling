var ToolingApp = angular.module('ToolingApp', ['ngRoute']);

//configure routes
ToolingApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/home.html',
            // controller: 'searchController'
        })
        .when('/show', {
            templateUrl: '/partials/show.html',
            controller: 'toolController'
        })
        .otherwise({
            redirectTo: '/'
        });
});