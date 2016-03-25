app.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.showProjects = false;
  $scope.showAbout = false;

 $scope.ToggleProjects = function(){
   $scope.showProjects = !$scope.showProjects;
 }

 $scope.ToggleAbout = function(){
   $scope.showAbout = !$scope.showAbout;
 }
}])
