'use strict';

/**
 * @ngdoc function
 * @name alarm.controller:GetapiCtrl
 * @description
 * # Getapi
 * Controller of the alarm
 */
angular.module('alarm')
  .controller('GetapiCtrl', function (Dataservice, $interval, $scope) {
    
    this.failure = function (data){
      $interval(function(){
        console.log(data.Job_name)
        var name = data.Job_name;
        responsiveVoice.speak(name+"build failure");
      }.bind(this), 30000); 
    }

      // this.failure();

    this.loadNotifications = function (){
    //   Dataservice.notification().then(function(response){
    //     // $scope.notification = data;
    //     if(response.status == 200){
            $scope.build_status = [{"Job_name":"DashBoard","Last_build":22,"Status":"SUCCESS"},{"Job_name":"Dishdash-IT","Last_build":252,"Status":"SUCCESS"},{"Job_name":"Dishdash-ST","Last_build":57,"Status":"SUCCESS"},{"Job_name":"dradiology-dev","Last_build":16,"Status":"SUCCESS"},{"Job_name":"dradiology-qa","Last_build":17,"Status":"SUCCESS"},{"Job_name":"emp-dev","Last_build":16,"Status":"SUCCESS"},{"Job_name":"emp-qa","Last_build":1,"Status":"SUCCESS"},{"Job_name":"emp-uat","Last_build":1,"Status":"FAILURE"},{"Job_name":"fortrust_it_deploy","Last_build":25,"Status":"SUCCESS"},{"Job_name":"fortrust_st_deploy","Last_build":11,"Status":"SUCCESS"},{"Job_name":"fortrust_uat_deploy","Last_build":2,"Status":"FAILURE"},{"Job_name":"iNotaryIT","Last_build":1238,"Status":"SUCCESS"},{"Job_name":"iNotaryProd","Last_build":73,"Status":"SUCCESS"},{"Job_name":"iNotaryST","Last_build":344,"Status":"SUCCESS"},{"Job_name":"iNotaryUAT","Last_build":108,"Status":"SUCCESS"},{"Job_name":"it-cv","Last_build":13,"Status":"SUCCESS"},{"Job_name":"it-cv-ang","Last_build":8,"Status":"SUCCESS"},{"Job_name":"it-rVidi-go","Last_build":7,"Status":"FAILURE"},{"Job_name":"loan_list","Last_build":815,"Status":"SUCCESS"},{"Job_name":"loan_list_it_angular","Last_build":23,"Status":"SUCCESS"},{"Job_name":"loan_list_st_deploy","Last_build":122,"Status":"SUCCESS"},{"Job_name":"loan_list_uat_deploy","Last_build":80,"Status":"SUCCESS"},{"Job_name":"Loanlist-api-IT","Last_build":272,"Status":"SUCCESS"},{"Job_name":"Loanlist-api-ST","Last_build":44,"Status":"SUCCESS"},{"Job_name":"Loanlist-api-UAT","Last_build":15,"Status":"SUCCESS"},{"Job_name":"OTTWeb_Test","Last_build":2,"Status":"FAILURE"},{"Job_name":"pList","Last_build":1816,"Status":"FAILURE"},{"Job_name":"pListIT","Last_build":5,"Status":"SUCCESS"},{"Job_name":"pListProd","Last_build":0,"Status":""},{"Job_name":"pListUAT","Last_build":0,"Status":""},{"Job_name":"q-library-angular","Last_build":29,"Status":"SUCCESS"},{"Job_name":"q-library-rails","Last_build":5,"Status":"SUCCESS"},{"Job_name":"q-meeting-angular","Last_build":35,"Status":"SUCCESS"},{"Job_name":"q-meeting-rails","Last_build":1,"Status":"SUCCESS"},{"Job_name":"QDash","Last_build":49,"Status":"SUCCESS"},{"Job_name":"st-q-library-angular","Last_build":97,"Status":"SUCCESS"},{"Job_name":"st-q-library-rails","Last_build":1,"Status":"FAILURE"},{"Job_name":"st-q-meeting-angular","Last_build":102,"Status":"SUCCESS"},{"Job_name":"st-q-meeting-rails","Last_build":45,"Status":"SUCCESS"},{"Job_name":"Vested","Last_build":1,"Status":"SUCCESS"}];

      //     $scope.build_status = response.data.Build_status;
      //    console.log($scope.build_status) ;
      //   }
      //   else {
      //   console.log("failure")

      //   }

      // });
   };
   //Put in interval, first trigger after 10 seconds 
   $interval(function(){
      this.loadNotifications();
   }.bind(this), 300000);    

   //invoke initialy
   this.loadNotifications();

   $scope.options = {
  playlist: ['/images/Over_the_horizon.mp3'],
  loop: true
};

  });
