angular.module('app.service', [])

.service('getMyOrderData', function(){
  this.myOrderLists=function(){
    var users=ref.child('users');
    var userLists = users.child(userUid);
    
    return userLists;
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
      if(items[each].quantities!=0){
        user.child(date).push().set({
          item: items[each].name,
          price: items[each].price,
          quantities: items[each].quantities
        });
      }
    }
    //return totalPrice;
    console.log(totalPrice);
    console.log(userUid);


  };
})
