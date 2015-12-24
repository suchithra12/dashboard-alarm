'use strict';

/**
 * @ngdoc function
 * @name alarm.Service:Getapiservice
 * @description
 * # Getapi
 * Controller of the alarm
 */

angular.module('alarm')
  .factory('Dataservice', function ($http) {
    var obj = { 
      getData: function() {
        
        function success (response) {
          return response.data;
        }

        function failure (response) {
          return response.data;
        }
        
        return $http.get("http://www.w3schools.com/angular/customers.php").then(success, failure);
      }   
    };

    return obj;
});