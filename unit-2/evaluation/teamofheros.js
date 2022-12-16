function runProgram(input) {
  input = input.trim().split("\n")
  var testcases = Number(input[0])
  var line = 1;
  for(var i = 0; i < testcases; i++) {
      var[n,K] = input[line++].trim().split(" ").map(Number)
      var arr = input[line++].trim().split(" ").map(Number)
     // console.log(n,k,arr)
  }
  teamOfHeros(arr,K)
}
function teamOfHeros(arr,K) {
      
      for(var j = 0; j <arr.length; j++) {
          for(var k = j; j < arr.length; k++) {
           
          if(arr[j]+arr[k] == K) {
       console.log("Yes")
   } else {
       console.log("No")
   }
}      
      }
    }   
  



if (process.env.USERNAME === "USER") {
  runProgram(`2
  5 31
  10 11 13 17 21
  5 44
  10 11 13 17 21`);
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
