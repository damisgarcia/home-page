'use strict';

/**
 * @ngdoc function
 * @name homePageApp
 * @description
 * # homePageApp
 */
angular.module('homePageApp',['ui.bootstrap','ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/categories");

  $stateProvider
    .state('categories', {
      url: "/categories/:category",
      views:{
        "yield":{
          templateUrl: "/views/categories.html",
          controller: "CategoriesCtrl as categories"
        }
      }
    })
}).run(function($rootScope,$http,$filter,xml){
  $rootScope.site = null
  $http({
   method  : 'GET',
   url     : '/feed.xml',
   timeout : 15000,
   transformResponse : function(data) {
     var json_string = xml.ToJson($.parseXML(data))
     var json = JSON.parse(json_string.replace(/undefined/g,""))
     return json
   }
  }).success(function(data, status, headers, config) {
   $rootScope.site = data.rss
  })
});
