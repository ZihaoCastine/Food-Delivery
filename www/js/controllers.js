angular.module('app.controllers', [])

.controller('loginCtrl', function($scope, $state) {
  $scope.isLogin=false;
  $scope.auth={
    username: '',
    password: ''
  }
  $scope.login=function(){
    //var ref = new Firebase("https://food-delivery-app.firebaseio.com/");

    ref.authWithPassword({
      email    : $scope.auth.username,
      password : $scope.auth.password

    }, function(error, authData) {
      if (error) {
        
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

    ref.createUser({
      email    : $scope.auth.username,
      password : $scope.auth.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        ref.child("users").child(userData.uid).set({
          userName: "zihao"
        });
        userUid=userData.uid;
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
  }
})

.controller('myOrdersCtrl', function($scope) {

})



.controller('menuCtrl', function($scope,$firebaseArray,setMyOrderData) {
  var menuDatabaseRef=ref.child('menu');
  var orderData=[];

  menuDatabaseRef.once('value', function(Snapshot){
    Snapshot.forEach(function(childSnapshot) {
      var item=childSnapshot.val();

      orderData.push({
        "name" : item.name,
        "price": item.price,
        "quantities": 0
      });
    });
    $scope.order = orderData;
  });

  $scope.order = orderData;

  $scope.quantities={
    "values":[0,1,2,3,4,5,6,7,8,9,10]
  };

  $scope.checkout=function(){
    setMyOrderData.setOrder(orderData);
  };
});
