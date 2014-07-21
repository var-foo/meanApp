'use strict';

angular.module('meanAppApp')
    .controller('MainCtrl', function ($scope, $http, Auth) {
        var currentUser = Auth.getCurrentUser();

        $scope.awesomeThings = [];

        $scope.currentUser = currentUser.name;

        $http.get('/api/things').success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.addThing = function () {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', { name: $scope.newThing });
            $scope.newThing = '';
        };

        $scope.deleteThing = function (thing) {
            $http.delete('/api/things/' + thing._id);
        };


    });