angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $http) {

        $http.get("productData.json").success(function (data) {
            $scope.products = data;
        });

        $scope.counter = 0;

        $scope.incrementCounter = function() {
            $scope.counter++;
        }
    });
