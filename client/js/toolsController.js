ToolingApp.controller("toolsController", function($scope, $window, $rootScope, $location, searchFactory){
    $scope.tool = searchFactory.tool;
    
    setTimeout(function() {window.redrawTables()}, 100);
    
    if($(window).width() <= ($('#em').width() * 40)){
        var ElementTop = $('#view').position().top;
        $('body').animate({scrollTop: ElementTop},500);
    }
    
    window.show_tool = function(partNo){
        searchFactory.show_detail(partNo);
    }
    
    $scope.show_tool_details = function(partNo){
        searchFactory.show_detail(partNo);
    }
});