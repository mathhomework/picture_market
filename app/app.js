(function(){
    var marketApp = angular.module('marketApp', ['ngRoute', 'firebase']);

    marketApp.config(function($routeProvider){
        $routeProvider
            .when('/',
            {
                controller:'marketController',
                templateUrl:'views/market.html'
            })
            .when('/listing/:productId',
            {
                controller:'productController',
                templateUrl:'views/product.html'
            })
            .otherwise({redirectTo: '/'})
    });
}());
