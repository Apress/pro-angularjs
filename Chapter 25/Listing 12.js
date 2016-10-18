angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $http, $interval, $timeout, $log) {

        $scope.intervalCounter = 0;
        $scope.timerCounter = 0;

        $interval(function () {
            $scope.intervalCounter++;
        }, 5, 10);

        $timeout(function () {
            $scope.timerCounter++;
        }, 5);

        $http.get("productData.json").success(function (data) {
            $scope.products = data;
            $log.log("There are " + data.length + " items");
        });

        $scope.counter = 0;

        $scope.incrementCounter = function() {
            $scope.counter++;
        }
    })
    .filter("labelCase", function () {
        return function (value, reverse) {
            if (angular.isString(value)) {
                var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
                return (reverse ? intermediate[0].toLowerCase() :
                    intermediate[0].toUpperCase()) + intermediate.substr(1);
            } else {
                return value;
            }
        };
    });
