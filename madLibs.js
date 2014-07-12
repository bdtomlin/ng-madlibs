angular.module('madLibs', [])
  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.data = {};
    $scope.data.genderOptions = ['male', 'female'];
    $scope.data.gender = 'male';

    $scope.data.inputs = [
      {attr: 'name', value: '', placeholder: 'Name'},
      {attr: 'dirtyTask', value: '', placeholder: 'dirty task'},
      {attr: 'obnoxiousCelebrity', value: '', placeholder: 'Obnoxious Celebrity'},
      {attr: 'jobTitle', value: null, placeholder: 'Job Title'},
      {attr: 'celebrity', value: null, placeholder: 'Celebrity'},
      {attr: 'hugeNumber', value: null, placeholder: 'huge number', type: 'number', errorMessage: 'Enter a valid number'},
      {attr: 'tediousTask', value: null, placeholder: 'tedious task'},
      {attr: 'uselessSkill', value: null, placeholder: 'useless skill'},
      {attr: 'adjective', value: null, placeholder: 'adjective'}
    ];

    $scope.input = function(name){
      for(var i=0, length=$scope.data.inputs.length; i<length; i++){
        if($scope.data.inputs[i]['attr'] === name){
          return $scope.data.inputs[i]['value'];
        }
      }
    }

    var conversions = {'he': 'she', 'him': 'her', 'his': 'her'};
    $scope.genderize = function(pronoun){
      if ($scope.data.gender === 'male'){
        return pronoun;
      } else {
        return conversions[pronoun];
      }
    };

    $scope.generateMadLib = function(){
      if($scope.myForm.$valid){
        $scope.generated = true;
      }
    };

    var resetData = function(){
      $scope.submitted = false;
      $scope.data.gender = 'male';
      for(var i=0, length=$scope.data.inputs.length; i<length; i++){
        $scope.data.inputs[i].value = null;
      }
    }

    $scope.startOver = function(){
      $scope.generated = false;
      resetData();
    };
  }]);
