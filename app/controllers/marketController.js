(function(){
    var marketController = function($scope,  marketFactory, $firebase){

        var row_size = 20;
        $scope.expand = false;
        $scope.products = marketFactory.getProducts();
        
        console.log($scope.products);
        $scope.expandNavbar = function(){
            $scope.expand = !$scope.expand;
            console.log($scope.expand);
        };
        console.log('marketController at work');

        //fxn to format 1 to 01
        function pad(d) {
            return (d < 10) ? '0' + d.toString() : d.toString();
        }


        $scope.paletteColor = "255, 255, 255";
        $scope.testBlueColor = function(){
            console.log("color change");
            $scope.paletteColor = "255, 255, 255";
        };

        $scope.selectColor = function(rgb){
            $scope.paletteColor = rgb;
        };

        //FIREBASE
        var ref = new Firebase("https://picmarket.firebaseio.com/");
        //angularfire ref to the data
        var sync = $firebase(ref);
        //download the data into a local object
        var syncObject = sync.$asObject();

        syncObject.$bindTo($scope, "myGrid").then(function(){
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
        //dependent on being inside compare_rgb
        var set_sq_2= function(sq_2, sq_2_rgb){
            sq_2_rgb = sq_2_rgb.r + ", " + sq_2_rgb.g + ", " + sq_2_rgb.b;
            sync.$set(sq_2, sq_2_rgb);
        };
        //iterates over rgb btwn square clicked and sq_2 and adjusts sq_2's rgb values accordingly
        //returns sq_2's rgb object.

        var compare_rgb = function(square_rgb,sq_2){ //sq_2 is the other square ex. bottom
            var sq_2_rgb = marketFactory.parseRgb($scope.myGrid[sq_2]);
            var j = ['r','g','b'];
            console.log(sq_2_rgb);
            for(var i in j){
                if(square_rgb[j[i]]>=sq_2_rgb[j[i]]){
                    sq_2_rgb[j[i]] += 50;
                }
                else{
                    sq_2_rgb[j[i]] -=50;
                }
                if(sq_2_rgb[j[i]]>255){
                    sq_2_rgb[j[i]] = 255;
                }
                else if(sq_2_rgb[j[i]]<0){
                    sq_2_rgb[j[i]] = 0;
                }
            }
            set_sq_2(sq_2,sq_2_rgb);
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

                var square_rgb = marketFactory.parseRgb($scope.paletteColor);
                console.log('yo');

                compare_rgb(square_rgb, bottom);
                compare_rgb(square_rgb, top);
                compare_rgb(square_rgb, right);
                compare_rgb(square_rgb, left);

//                sync.$set(right, $scope.paletteColor);
//                sync.$set(top, "245,0,205");
//                sync.$set(bottom, "white");
//                sync.$set(left, "pink");
            }






            console.log("square clicked");
            console.log($scope.paletteColor);
            sync.$set(position, $scope.paletteColor);
        };

    };
    marketController.$inject = ['$scope', 'marketFactory', '$firebase'];
    angular.module('marketApp').controller('marketController', marketController);
}());