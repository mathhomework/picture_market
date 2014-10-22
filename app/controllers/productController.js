(function(){
    var productController = function($scope, $routeParams, marketFactory){
        var productId = $routeParams.productId;
        var getProductResult = marketFactory.getProduct(productId);
        $scope.product = getProductResult.product;
        $scope.dataPlace = getProductResult.dataPlace;
//        var allProducts = marketFactory.getProducts();
//        var allProductsLength = allProducts.length;


        $scope.getNextProduct = function(e){
            $scope.nextProductId = marketFactory.getNextProduct(productId, e).id;

        };


    };
    productController.$inject = ['$scope', '$routeParams', 'marketFactory'];
    angular.module('marketApp').controller('productController', productController)
}());