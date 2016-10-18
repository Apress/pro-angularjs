angular.module("exampleApp", ["increment", "ngResource"])
.constant("baseUrl", "http://localhost:5500/products/")
.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when("/list", {
        templateUrl: "/tableView.html"
    });

    $routeProvider.when("/edit", {
        templateUrl: "/editorView.html"
    });

    $routeProvider.when("/create", {
        templateUrl: "/editorView.html"
    });

    $routeProvider.otherwise({
        templateUrl: "/tableView.html"
    });

})
.controller("defaultCtrl", function ($scope, $http, $resource, baseUrl) {

    $scope.displayMode = "list";
    $scope.currentProduct = null;

    $scope.productsResource = $resource(baseUrl + ":id", { id: "@id" },
            { create: { method: "POST" }, save: { method: "PUT" } });

    $scope.listProducts = function () {
        $scope.products = $scope.productsResource.query();
    }

    $scope.deleteProduct = function (product) {
        product.$delete().then(function () {
            $scope.products.splice($scope.products.indexOf(product), 1);
        });
        $scope.displayMode = "list";
    }

    $scope.createProduct = function (product) {
        new $scope.productsResource(product).$create().then(function (newProduct) {
            $scope.products.push(newProduct);
            $scope.displayMode = "list";
        });
    }

    $scope.updateProduct = function (product) {
        product.$save();
        $scope.displayMode = "list";
    }

    $scope.editOrCreateProduct = function (product) {
        $scope.currentProduct = product ? product : {};
        $scope.displayMode = "edit";
    }

    $scope.saveEdit = function (product) {
        if (angular.isDefined(product.id)) {
            $scope.updateProduct(product);
        } else {
            $scope.createProduct(product);
        }
    }

    $scope.cancelEdit = function () {
        if ($scope.currentProduct && $scope.currentProduct.$get) {
            $scope.currentProduct.$get();
        }
        $scope.currentProduct = {};
        $scope.displayMode = "list";
    }

    $scope.listProducts();
});
