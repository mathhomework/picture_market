(function(){
    var marketApp = angular.module('marketApp', ['ngRoute']);

    marketApp.config(function($routeProvider){
        $routeProvider
            .when('/',
            {
                controller:'marketController',
                templateUrl:'views/market.html'
            })
            .when('/listing/:id',
            {
                controller:'marketController',
                templateUrl:'market.html'
            })
            .otherwise({redirectTo: '/'})
    });
}());
