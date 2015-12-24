'use strict';

/**
 * @ngdoc function
 * @name alarm.controller:GetapiCtrl
 * @description
 * # Getapi
 * Controller of the alarm
 */
angular.module('alarm')
  .controller('GetapiCtrl', function (Dataservice) {

  	var viewModel = this;
  	viewModel.dataObj = {};

  	Dataservice.getData().then(function(response) {
  		viewModel.dataObj = response.records;
  	});

  });
