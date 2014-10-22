(function(){
    var marketFactory = function(){
        var products = [
            {
                id:42,
                name:'blue',
                image: 'http://i.imgur.com/teQ7d2y.png',
                price:'1.00',
                description: 'what more could you possibly want?'
            },
            {
                id:33,
                name:'red',
                image: 'http://i.imgur.com/hfuuwlO.png',
                price:'1.25',
                description: 'as red as a red square can be'
            },
            {
                id:12,
                name:'green',
                image: 'http://i.imgur.com/5Hj5zBH.png',
                price:'1.50',
                description: 'just like you'
            }
        ];
        var factory = {};
        factory.getProducts = function(){
            return products;
        };

        factory.getProduct = function(productId){
            for(var x = 0; x<products.length ;x++){
                if(productId == products[x].id){
                    return {
                        product:products[x],
                        dataPlace:x,
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
        return factory;
    };

    angular.module('marketApp').factory('marketFactory', marketFactory);
}());