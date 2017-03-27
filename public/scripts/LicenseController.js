angular.module('educationApp').controller('LicenseController', function($http,license,$scope,$mdDialog,$mdToast,$window){
  var vm = this;

  vm.license = license;

  getTime = function(){

    var end = new Date(vm.license.duedate);
    // console.log(end);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
         vm.days = Math.floor(distance / _day);
         vm.hours = Math.floor((distance % _day) / _hour);
         vm.minutes = Math.floor((distance % _hour) / _minute);
         vm.seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = vm.days + ' days ';
        document.getElementById('countdown').innerHTML += vm.hours + ' hrs ';
        document.getElementById('countdown').innerHTML += vm.minutes + ' mins ';
        document.getElementById('countdown').innerHTML += vm.seconds + ' secs';
    }

    timer = setInterval(showRemaining, 10000);
  }

  getTime();



  vm.options = {
    bgColor: '#646368',
    trackWidth: 50,
    barWidth: 30,
    barColor: '#10a323',
    textColor: '#eee',
    max: license.hoursReq,
  };

  vm.save = function(){


    var sendData = {};
    sendData.hoursReq = vm.license.hoursReq;
    sendData.hours = vm.license.hours;
    sendData.duedate = vm.license.duedate;
    sendData.name = vm.license.name;
    sendData.number = vm.license.number;

    sendData.id = vm.license._id;



    $http.post('/license/editlicense', sendData).then(function(response){
      $mdToast.show({
          position: "top left",
          template: function(){
            if (response.status == 401){"<md-toast>License Successfully Updated!</md-toast>"}
            else {"<md-toast>There was a problem there...</md-toast>"}
          }
        })
        $mdDialog.hide();
    }, function(response){
      console.log('Fail');
    })
  }



  vm.delete = function(){

    $http.delete('/license/delete/' + license._id).then(function(response){
    }, function(response){
      console.log('Could not delete');
    })
    $mdToast.show({
        position: "top left",
        template: function(){
          if (response.status == 401){"<md-toast>License Removed</md-toast>"}
          else {"<md-toast>There was a problem there...</md-toast>"}
        }
      })
      // $window.location.href= "/";
    $mdDialog.hide();

  }

})
