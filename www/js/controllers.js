angular.module('app.controllers', [])

.controller('loginCtrl', function($scope, $state) {
  $scope.isLogin=false;
  $scope.auth={
    username: '',
    password: ''
  }
  $scope.login=function(){
    var ref = new Firebase("https://food-delivery-app.firebaseio.com/");

    ref.authWithPassword({
      email    : $scope.auth.username,
      password : $scope.auth.password

    }, function(error, authData) {
      if (error) {
        $state.go('tabs.menu');
        console.log("Login Failed!", error);
      } else {
        $state.go('tabs.menu');
        userUid=authData.uid;
        console.log(userUid);
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  }

  $scope.creatingAccount=function(){
    var ref = new Firebase("https://food-delivery-app.firebaseio.com/");
    ref.createUser({
      email    : $scope.auth.username,
      password : $scope.auth.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        userUid=userData.uid;
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
  }
})

.controller('myOrdersCtrl', function($scope) {

})



.controller('menuCtrl', function($scope,$firebaseArray) {
  var menuDatabaseRef=new Firebase("https://food-delivery-app.firebaseio.com/menu")
  var menuData= $firebaseArray(menuDatabaseRef);
  $scope.menu =menuData;
  console.log(menuData)



});
