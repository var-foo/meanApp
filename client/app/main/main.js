'use strict';
angular.module('meanAppApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                onEnter: function(){ console.log('in app.main state'); }
            });
    });