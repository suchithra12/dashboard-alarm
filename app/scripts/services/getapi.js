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
  // var obj = {
  //   getData: function(data) {
  //     function success (response) {
  //       return response;
  //     }
  //     function failure (response) {
  //     console.log("pp")
  //       return response;
  //     }
  //     return $http.post("http://192.168.2.73:3000/build_status").then(success, failure);
  //   }
  // };
  // return obj;

  return{
    notification: function(){
        return $http.post("http://192.168.2.73:3000/build_status").success(function(response){
           return response;
        });          
    }
}
});