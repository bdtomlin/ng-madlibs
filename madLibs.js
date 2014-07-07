angular.module('madLibs', [])
  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.initialValues = {
      gender: 'male',
      name: 'Name',
      jobTitle: 'Job Title',
      tediousTask: 'tedious task',
      dirtyTask: 'dirty task',
      celebrity: 'Celebrity',
      uselessSkill: 'useless skill',
      obnoxiousCelebrity: 'Obnoxious Celebrity',
      hugeNumber: 'huge number',
      adjective: 'adjective'
    };

    $scope.placeholders = angular.copy($scope.initialValues);
    $scope.inputs = $scope.initialValues;

    $scope.genderize = function(pronoun){
      if ($scope.inputs.gender === 'male'){
        return pronoun;
      } else {
        var conversions = {'he': 'she', 'him': 'her', 'his': 'her'};
        return conversions[pronoun];
      }
    };
  }]);
