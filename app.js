const app = angular.module('app', [])
app.controller('myController', function ($scope) {
    $scope.message = 'hello from controller: 111'
})
app.directive('myDirective', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<div>{{message}}</div>',
        controller: function ($scope) {
            $scope.message = 'hello from directive: 222'
        }
    }
})