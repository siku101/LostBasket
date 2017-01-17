
 
 var lostBasketApp = angular.module('lostBasketApp', []);
 
 
 lostBasketApp.controller('lostBasketController', function ($scope, $http){
   $http.get('inputs.json').success(function(data) {
     $scope.inputs = data;
   
   
   $scope.selected = [];
   
   $scope.exist = function (selectedItem) {	
   return $scope.selected.indexOf(selectedItem) > -1;
   }
   
   
   $scope.select = function(selectedItem) {	
   var index = $scope.selected.indexOf(selectedItem);	
   if ( index > -1) {		
   $scope.selected.splice( index, 1);	
   } else {		
   $scope.selected.push(selectedItem);	
   }
   }
 });	
 	
    });
