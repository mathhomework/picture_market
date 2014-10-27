(function(){
    var marketController = function($scope,  marketFactory, $firebase){

        var row_size = 20;
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


        $scope.paletteColor = "#ff0000";
        $scope.testBlueColor = function(){
            console.log("color change");
            $scope.paletteColor = "#00ff00";
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
            for (var i= 1; i<=row_size; i++) {
                for (var j = 1; j <= row_size; j++) {
                    var myKey = pad(i)+"-"+pad(j);
                    sync.$set(myKey, $scope.paletteColor);

                }
            }

        };

        $scope.squareClick = function(position){
            //top bottom = a axis; left right = b axis
            console.log(position);
            var square_a = parseInt(position.substring(0,2));
            var square_b = parseInt(position.slice(-2));
            if (square_a< row_size && square_a > 0 && square_b< row_size && square_b > 0){
                var bottom = pad(square_a+1) +"-"+ pad(square_b);
                var top = pad(square_a -1) +"-"+ pad(square_b);
                var left = pad(square_a) +"-"+ pad(square_b -1);
                var right = pad(square_a) +"-"+ pad(square_b +1);

                sync.$set(right, $scope.paletteColor);
                sync.$set(top, "black");
                sync.$set(bottom, "white");
                sync.$set(left, "pink");
            }






            console.log("square clicked");
            console.log($scope.paletteColor);
            sync.$set(position, $scope.paletteColor);
        };

    };
    marketController.$inject = ['$scope', 'marketFactory', '$firebase'];
    angular.module('marketApp').controller('marketController', marketController);
}());