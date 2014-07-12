angular.module('madLibs', [])
  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.genderOptions = ['male', 'female'];
    $scope.gender = 'male';
    $scope.inputs = [
      {attr: 'name', value: 'Name'},
      {attr: 'dirtyTask', value: 'dirty task'},
      {attr: 'obnoxiousCelebrity', value: 'Obnoxious Celebrity'},
      {attr: 'jobTitle', value: 'Job Title'},
      {attr: 'celebrity', value: 'Celebrity'},
      {attr: 'hugeNumber', value: 'huge number'},
      {attr: 'tediousTask', value: 'tedious task'},
      {attr: 'uselessSkill', value: 'useless skill'},
      {attr: 'adjective', value: 'adjective'}
    ];
    $scope.placeholders = angular.copy($scope.inputs);

    $scope.input = function(name){
      for(var i=0, length=$scope.inputs.length; i<length; i++){
        if($scope.inputs[i]['attr'] === name){
          return $scope.inputs[i]['value'];
        }
      }
    }

    var conversions = {'he': 'she', 'him': 'her', 'his': 'her'};
    $scope.genderize = function(pronoun){
      if ($scope.gender === 'male'){
        return pronoun;
      } else {
        return conversions[pronoun];
      }
    };
  }]);
