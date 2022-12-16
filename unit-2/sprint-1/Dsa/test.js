var arr = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"]
countUcCharacter


function countUcCharacter (arr) {
  var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var count = 0;
  for(var i = 0; i< arr.length; i++) {
    for(var j = 0; j < uc.length; j++) {
      if(arr[i] == uc[j]){
        count++;
      }
   
    }

  }
 
}
cconsole.log(count)