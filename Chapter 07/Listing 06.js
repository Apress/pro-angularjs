angular.module("cart", [])
.factory("cart", function () {

    var cartData = [];

    return {
        // ...service statements omitted for brevity...
    }
})
.directive("cartSummary", function (cart) {
    return {
        restrict: "E",
        templateUrl: "components/cart/cartSummary.html",
        controller: function ($scope) {

            var cartData = cart.getProducts(); 

            $scope.total = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += (cartData[i].price * cartData[i].count);
                }
                return total;
            }

            $scope.itemCount = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += cartData[i].count;
                }
                return total;
            }
        }
    };
});
