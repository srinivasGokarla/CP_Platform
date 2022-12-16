function runProgram(input) {
  input = input.trim().split("\n")
  var testcases = Number(input[0])
  var line = 1;
  for(var i = 0; i < testcases; i++) {
      var [N,K] = input[line++].trim().split(" ").map(Number)
      var arr = input[line++].trim().split(" ").map(Number)
     // console.log(arr,N,K)
      var sum = 0;
      for(var j = 0; j < arr.length; j++) {
         sum = sum + arr[i]
        
      }
       if( (sum / N))
      
  }
}


if (process.env.USERNAME === "USER") {
  runProgram(`2
  4 10
  1 2 3 4
  4 5
  1 2 3 4`);
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
