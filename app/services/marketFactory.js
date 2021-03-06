(function(){
    var marketFactory = function($firebase){
        var listingsRef = new Firebase("https://piclistings.firebaseio.com");
        var sync2 = $firebase(listingsRef);
        var products = sync2.$asArray();
//        products.$loaded().then(function(products) {
//            console.log(products);
//        });

//        var products = [
//            {
//                id:42,
//                name:'blue',
//                image: 'http://i.imgur.com/teQ7d2y.png',
//                price:'1.00',
//                description: 'what more could you possibly want?',
//                hex:'#6600ff',
//                rgb:'0, 0, 255',
//                patrons:'John'
//            },
//            {
//                id:33,
//                name:'red',
//                image: 'http://i.imgur.com/hfuuwlO.png',
//                price:'1.25',
//                description: 'as red as a red square can be',
//                hex:'#ff000',
//                rgb:'255, 0, 0',
//                patrons:'Tim'
//
//            },
//            {
//                id:12,
//                name:'green',
//                image: 'http://i.imgur.com/5Hj5zBH.png',
//                price:'1.50',
//                description: 'just like you',
//                hex:'#15FF00',
//                rgb:'0, 255, 0',
//                patrons:''
//            }
//        ];
        var factory = {};
        factory.getListingsRef = function(){
            return listingsRef;
        };
        factory.getProducts = function(){
            console.log(products);
            return products;
        };

        factory.getProduct = function(productId){
            for(var x = 0; x<products.length ;x++){
                if(productId == products[x].id){
                    return {
                        product:products[x],
                        dataPlace:x
                    };
                }
            }
            return {};
        };

        factory.getNextProduct = function(productId, e){
//            currentProductPlace(in Array)
            var currentProductPlace = factory.getProduct(productId).dataPlace;
            if (e=="next" && currentProductPlace<products.length){
                return products[currentProductPlace+1];
            }

            else if(e=="prev" && currentProductPlace>0){
                return products[currentProductPlace-1];
            }
            else{
                return {};
            }
        };
        factory.getNextAvailableId = function(){
            nums = [];
            for(var x = 0; x< products.length; x++){
                nums.push(products[x].id);
            }
            return Math.max.apply(Math, nums)+1;
        };
        factory.componentToHex = function(c){
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        };

        factory.rgbToHex = function(r,g,b){
            return "#" + factory.componentToHex(r) + factory.componentToHex(g) + factory.componentToHex(b);
        };

        factory.hexToRgb = function(hex) {
            if(hex.charAt(0)==="#"){
                hex = hex.substr(1);
            }
            var bigint = parseInt(hex, 16);
            var r = (bigint >> 16) & 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;

            return r + ", " + g + ", " + b;
        };

        factory.parseRgb = function(rgb){
            rgb = rgb.replace(/\s/g, '');
            var red = parseInt(rgb.split(',')[0]);
            var green = parseInt(rgb.split(',')[1]);
            var blue = parseInt(rgb.split(',')[2]);

            return {
                r:red,
                g:green,
                b:blue
            };
        };

        return factory;
    };

    marketFactory.$inject = ['$firebase'];
    angular.module('marketApp').factory('marketFactory', marketFactory);
}());