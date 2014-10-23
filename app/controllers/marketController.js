(function(){
    var marketController = function($scope,  marketFactory){
//        var ref = new Firebase("https://picmarket.firebaseio.com/");
//
//        //angularfire ref to the data
//        var sync = $firebase(ref);
//
//        //download the data into a local object
//        $scope.data = sync.$asObject();
        $scope.expand = false;
        $scope.products = marketFactory.getProducts();
        $scope.expandNavbar = function(){
            $scope.expand = !$scope.expand;
            console.log($scope.expand);
        };
        console.log('marketController at work');
    };

    marketController.$inject = ['$scope', 'marketFactory'];
    angular.module('marketApp').controller('marketController', marketController);
}());