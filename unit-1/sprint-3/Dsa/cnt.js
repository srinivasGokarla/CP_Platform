function runProgram(input) {
    var arr=input.split("\n");
    var A = arr[1];
    var N =num.split(" ").map(Number);
   
    function small(arr)
    {
    var minmum = arrr[0];
    for(var i=1;i<arr.length;i++)
    {
        if(minimum>arr[i])
        {
            minimum=arr[i];
        }
    }
    return minimum;
    }
    function large(arr)
    {
        var maximum=arrr[0];
        for(var i=1;i<arr.length;i++)
        {
            if(maximum<arrr[i])
            {
                maximum=arr[i];
            }
        }
        return maximum;
    }
    var smallest=small(number);
    console.log(smallest);
    var largest=large(number);
    console.log(largest);
   
    
   }
   
   if (process.env.USERNAME === "BURANA PAPARAO") {
     runProgram(`4\n-2 0 8 4`);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }
 



   function runProgram(input) {
    input=input.trim().split("\n");
    var N =input[0];
    var arr =input[1].trim().split(" ").map(Number)
  
    var target= 42;
    var count=0;
  
  for (var i = 0; i < arr.length; i++) {
          if(arr[i]==target){
                  count++;          
          }
          
    }
       if (count>0){
          console.log("Yes");
       } else{
          console.log("No");
        }
  
  }
  
  if (process.env.USERNAME === "BURANA PAPARAO") {
    runProgram(`5
    3 4 0 42 8`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }