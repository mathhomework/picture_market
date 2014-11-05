(function(){
    var createController = function($scope, marketFactory, $location){
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
            console.log(marketFactory.getNextAvailableId());
            if($scope.create_name != null && $scope.create_description != null){
                console.log("creating color");
                var create_name = $scope.create_name;
            console.log(create_name);
                var create_description = $scope.create_description;
                listingsRef.child(create_name)
                    .update({
                        id: marketFactory.getNextAvailableId(),
                        name: create_name,
                        price: '1.50',
                        description: create_description,
                        hex: hex,
                        rgb: rgb,
                        patrons: ''
                    });
                $location.path('/');
            }
        };
    };
    createController.$inject = ['$scope','marketFactory', '$location'];
//    $scope.createRgb =
    angular.module('marketApp').controller('createController', createController);
}());