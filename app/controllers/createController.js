(function(){
    var createController = function($scope, marketFactory){
        var listingsRef = marketFactory.getListingsRef();
        $scope.reqs = {};

        $scope.show = function(){
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
        };


//        listingsRef.update(
//            description: $scope.create
//        )
    };
    createController.$inject = ['$scope','marketFactory'];
//    $scope.createRgb =
    angular.module('marketApp').controller('createController', createController);
}());