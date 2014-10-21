(function(){
    var marketController = function($scope,  marketFactory){
//        var ref = new Firebase("https://picmarket.firebaseio.com/");
//
//        //angularfire ref to the data
//        var sync = $firebase(ref);
//
//        //download the data into a local object
//        $scope.data = sync.$asObject();

        $scope.products = marketFactory.getProducts();

        console.log($scope.products)

    };

    marketController.$inject = ['$scope', 'marketFactory'];
    angular.module('marketApp').controller('marketController', marketController);
}());