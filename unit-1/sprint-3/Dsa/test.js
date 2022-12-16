var details = {
  addressess : [
    {city : "SPT", type : "home", pincode : "532291",phones : [9878475566,9849668841,9573849671]},
    {city : "Vzg", type : "Office", pincode : "530042", phones : [8790844853,6302484961]},
  ],
findcityByMobile : function(pho) {
  var cities = []
  for (var i = 0; i < this.addressess.length; i++) {
    //var adr = this.addressess[i]
   // var phones = this.addressess[i].phone;
    for(var j = 0; j < this.addressess[i].phones.length; j++) {
      if(this.addressess[i].phones[j] == pho) {
        cities.push(this.addressess[i].city)
      }
    }
  }
  return cities;
}
}
var serach = details.findcityByMobile(9573849731);
if(serach.length == 0) {
  console.log("Phone Not Found");
} else {
  console.log(search)
}

//console.log(details.addressess.lenght);

///console.log(details.length);

//for (var i = 0; i< details,addressess.length; i++) {
//  console.log(details.addressess[i].city + '-' + details.addresses[i].pincode)
//}