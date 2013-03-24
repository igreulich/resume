igResume.controller('MainCtrl', function($scope, $http){
  $http.get("data/experience.json").success(function(data){
    $scope.experience = data;
  });

  $http.get("data/laguages.json").success(function(data){
    $scope.languages = data;
  });

  // $http.get("data/education.json").success(function(data){
  //   $scope.education = data;
  // });
});