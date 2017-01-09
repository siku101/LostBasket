
 
 var lostBasketApp = angular.module('lostBasketApp', []);
 lostBasketApp.controller('lostBasketController', function ($scope, $http){
   $http.get('inputs.json').success(function(data) {
     $scope.inputs = data;
   });
 });
