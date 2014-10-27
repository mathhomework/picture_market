(function(){
    var marketController = function($scope,  marketFactory, $firebase){
        var ref = new Firebase("https://picmarket.firebaseio.com/");
        //angularfire ref to the data
        var sync = $firebase(ref);
        //download the data into a local object
        var syncObject = sync.$asArray();
        console.log(syncObject);


        $scope.expand = false;
        $scope.products = marketFactory.getProducts();
        $scope.expandNavbar = function(){
            $scope.expand = !$scope.expand;
            console.log($scope.expand);
        };
        console.log('marketController at work');

        $scope.paletteColor = "#f00";

        $scope.createGridData = function(){
            ref.remove();
            for (var i= 1; i<=20; i++) {
                for (var j = 1; j <= 20; j++) {
                    var myKey = i+"-"+j;
                    syncObject.$add({position:myKey, hex:$scope.paletteColor});
                }
            }

        };


        $scope.squareClick = function(x, y){
            var myKey = x + "-" + y;
            syncObject.$add({position:myKey , body:$scope.paletteColor});
            console.log(myKey);
        };

        var createGrid = function(){
            for (var i= 1; i<=20; i++){
                for(var j =1; j<=20; j++){
                    $('#grid').append("<div class='square' style='background:{{ paletteColor}}' ng-click='squareClick("+j+", "+i+")' data-x='"+j+"' data-y='"+i+"'></div>");

                }
            }
        };



        var init = function(){
            createGrid();

        };

        (function(){
            init();
        }())














    };
    marketController.$inject = ['$scope', 'marketFactory', '$firebase'];
    angular.module('marketApp').controller('marketController', marketController);
}());