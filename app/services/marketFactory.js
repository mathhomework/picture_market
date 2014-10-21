(function(){
    var marketFactory = function(){
        var products = [
            {
                id:1,
                name:'blue',
                image: 'http://i.imgur.com/teQ7d2y.png',
                price:'1.00',
                description: 'what more could you possibly want?'
            },
            {
                id:2,
                name:'red',
                image: 'http://i.imgur.com/hfuuwlO.png',
                price:'1.25',
                description: 'as red as a red square can be'
            },
            {
                id:3,
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

        return factory;
    };

    angular.module('marketApp').factory('marketFactory', marketFactory);
}());