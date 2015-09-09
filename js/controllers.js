app.controller('MainCtrl', function ($scope, $http) {
  $scope.result = 'test';
  $http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data;
  });
  $http.get('itunes.json').then(function (data) {
    $scope.appleData = data;
  });
})
