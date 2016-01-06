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

  return{
    notification: function(){
        return $http.post("http://54.213.20.151:3000/build_status").success(function(response){
           return response;
        });          
    }
}
});