(function(){
    var marketApp = angular.module('marketApp', ['ngRoute']);


    marketApp.config(function($routeProvider){
        $routeProvider
            .when('/',
            {
                controller:'marketController',
                templateUrl:'views/market.html'
            })
            .when('/somewhere/',
            {
                controller:'marketController',
                templateUrl:'market.html'
            })
            .otherwise({redirectTo: '/'})
    });
}());
