'use strict';

/**
 * @ngdoc function
 * @name homePageApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the homePageApp
 */
angular.module('homePageApp')
  .controller('CategoriesCtrl', function ($rootScope,$stateParams,$filter) {
    this.posts = $filter("filter")($rootScope.site.channel.item,{ category: $stateParams.category })

    this.formatDate = function(date){
      return new Date(date)
    }
  });
