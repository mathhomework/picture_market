(function(){
    var createController = function($scope, marketFactory){
        var listingsRef = marketFactory.getListingsRef();
        $scope.reqs = {};

        $scope.createListing = function(){
            var hex = $('#createHex').text();
            var rgb = $('#createRgb').text();

            $scope.$watch('create_name', function(newVal){
                $scope.reqs.name_req= null;

                if(!newVal){
                    $scope.reqs.name_req = 'Name required';
                }
                $scope.showReqs = $scope.reqs.length;
            });
            $scope.$watch('create_description', function(newVal){
                $scope.reqs.description_req = null;

                if(!newVal){
                    $scope.reqs.description_req ='Description required';
                }
            });
            console.log(listingsRef);
            console.log($scope.reqs);
//            if($scope.reqs==null){
                console.log("creating color");
                var create_name = $scope.create_name;
                var create_description = $scope.create_description;
                listingsRef.$set({
                    create_name:{
                        id:14,
                        name: create_name,
                        price:'1:50',
                        description:create_description,
                        hex: hex,
                        rgb: rgb,
                        patrons: ''
                    }
                });
//            }
        };
    };
    createController.$inject = ['$scope','marketFactory'];
//    $scope.createRgb =
    angular.module('marketApp').controller('createController', createController);
}());