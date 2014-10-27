(function(){
    var marketController = function($scope,  marketFactory, $firebase){


        $scope.expand = false;
        $scope.products = marketFactory.getProducts();
        $scope.expandNavbar = function(){
            $scope.expand = !$scope.expand;
            console.log($scope.expand);
        };
        console.log('marketController at work');

        //fxn to format 1 to 01
        function pad(d) {
            return (d < 10) ? '0' + d.toString() : d.toString();
        }


        $scope.paletteColor = "#f00";
        $scope.testBlueColor = function(){
            console.log("color change");
            $scope.paletteColor = "#0f0";
        };

        //FIREBASE
        var ref = new Firebase("https://picmarket.firebaseio.com/");
        //angularfire ref to the data
        var sync = $firebase(ref);
        //download the data into a local object
        var syncObject = sync.$asObject();
        console.log(syncObject);


        syncObject.$bindTo($scope, "myGrid").then(function(){
            console.log($scope.myGrid);
        });

        $scope.createGridData = function(){
            console.log("reseting firebase data");
            ref.remove();
            for (var i= 1; i<=20; i++) {
                for (var j = 1; j <= 20; j++) {
                    var myKey = pad(i)+"-"+pad(j);
                    sync.$set(myKey, $scope.paletteColor);

                }
            }

        };

        $scope.squareClick = function(position){
            console.log("square clicked");
            console.log(position);
            console.log($scope.paletteColor);
//            $scope.myGrid.position = $scope.paletteColor;
            sync.$set(position, $scope.paletteColor);
        };
//        $scope.squareClick = function(x, y){
//            console.log("square clicked");
//            var myKey = pad(x) + "-" + pad(y);
//            syncObject.$update({position:myKey , body:$scope.paletteColor});
//            console.log(myKey);
//        };

//        var createGrid = function(){
//            for (var i= 1; i<=20; i++){
//                for(var j =1; j<=20; j++){
//                    $('#grid').append("<div class='square' style='background:{{ paletteColor}}' ng-click='squareClick("+j+", "+i+")' data-x='"+j+"' data-y='"+i+"'></div>");
//
//                }
//            }
//        };
//
//
//
//        var init = function(){
//            createGrid();
//
//        };
//
//        (function(){
//            init();
//        }())



    };
    marketController.$inject = ['$scope', 'marketFactory', '$firebase'];
    angular.module('marketApp').controller('marketController', marketController);
}());