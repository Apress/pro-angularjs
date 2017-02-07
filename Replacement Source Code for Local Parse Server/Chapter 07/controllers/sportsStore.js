angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:1337/parse/classes/Products")    
    .run(function ($http) {
        $http.defaults.headers.common["X-Parse-Application-Id"] = "sportsstore";
        $http.defaults.headers.common["X-Parse-REST-API-Key"] = "myRestSecret";
    })
    .controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {

        $scope.data = {};

        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data.results;

            })
            .error(function (response) {
                $scope.data.error = response.error || response;
            });
    });
