var app = angular.module('myApp.reservationModule', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/reservation', {
            templateUrl: 'views/reservation/Reservation.html'
        });
    }]);
app.controller('reservationCtrl', function ($scope, reservationService) {
        console.log('Inside');
        $scope.resultSet = reservationService;
        console.log('Outside');
});