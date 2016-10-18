describe("Controller Test", function () {

    // Arrange
    var mockScope = {};
    var controller;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        mockScope = $rootScope.$new();
        controller = $controller("defaultCtrl", { 
            $scope: mockScope
        });
    }));

    // Act and Assess
    it("Creates variable", function () {
        expect(mockScope.counter).toEqual(0);
    })

    it("Increments counter", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });
});
