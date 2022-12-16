function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var size = Number(input[0]);
//console.log(testcases)
    var arr = input[1].trim().split(" ").map(Number)
   // console.log(arr)
   var ans = -1;
   var min = Infinity;

   for(var i = 0; i < arr.length; i++) {
    var temp = 0;
     for(var j = 0; j < arr.length; j++) {
       if(i != j) {
               temp +=   arr[j];
           } if(temp % 7 == 0 && arr[i] < min) {
            min = arr[i];
            ans  = 1;
            console.log(ans)
       }    
   }
  
}

  
}
if (process.env.USERNAME === "Raju") {
  runProgram(`5
  14 7 8 2 4`);
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
