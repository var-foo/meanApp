'use strict';

angular.module('meanAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.recipes', {
        url: '/recipes',
        templateUrl: 'app/recipes/recipes.html',
        controller: 'RecipesCtrl'
      });
  });