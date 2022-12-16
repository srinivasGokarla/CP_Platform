var str = "aabcc";
var   result = "";

 i = 0;

for(var j = i; j < str.length; j++) {
    var count = 0;
    j = i;
    if(str[j] != str[i]) {
        break;

        
    }else {
        count++;


    }
    result = str[i] + count;
    i = j;
    console.log(result)
    
}


            
       
