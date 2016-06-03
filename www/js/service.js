angular.module('app.service', [])

.service('getMyOrderData', function(){
  this.myOrders=function(){
    var users=ref.child('users');
    var userLists = users.child(userUid);
    var userOrderList= $firebaseArray(userDatabaseRef);
  };
})

.service('setMyOrderData', function(){
  this.setOrder=function(items){
    var users=ref.child('users');
    var user=users.child(userUid);
    var totalPrice=0;
    var date=new Date().getTime();
    for(var i in items ){
      totalPrice+= (items[i].price)*(items[i].quantities) ;
    };

    for(var each in items){
      user.child(date).push().set({
        item: items[each].name,
        price: items[each].price,
        quantities: items[each].quantities
      });
    }

    console.log(totalPrice);
    console.log(userUid);


  };
})
