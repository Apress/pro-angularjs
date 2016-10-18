angular.module("increment", [])
    .directive("increment", function () {
        return {
            restrict: "E",
            scope: {
                item: "=item",
                property: "@propertyName",
                restful: "@restful",
                method: "@methodName"
            },
            link: function (scope, element, attrs) {
                var button = angular.element("<button>").text("+");
                button.addClass("btn btn-primary btn-xs");
                element.append(button);
                button.on("click", function () {
                    scope.$apply(function () {
                        scope.item[scope.property]++;
                        if (scope.restful) {
                            scope.item[scope.method]();
                        }
                    })
                })
            },
        }
    });
