function isItPalindrome(n, arr){
  
    var count = 0; 
   var count1 = 0;
   
   for(var i = 0; i < n; i ++) {
     if(arr[i] == 1) {
       count++;
    } if (arr[i] == 2) {
       count1++;
     }
   } if(count % 2 == 0 || count1 % 2 == 0) {
     console.log("YES")
     } else {
     console.log("NO")
     }
    }
   
 