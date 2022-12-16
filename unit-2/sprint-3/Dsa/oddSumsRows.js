function runProgram(input) {
    input = input.trim().split("\n")
   // console.log(input)
    var[N,M] = input[0].trim().split(" ").map(Number);
    var line = 1;
    for(var i = 0; i < M; i++) {
        var arr = input[line++].trim().split(" ").map(Number);
       // console.log(arr)
       var sum = 0;
      for(var j = 0; j < arr.length; j++) {
          if(arr[j] % 2 != 0) {
           sum = sum + arr[j];
          }
         
      }
      console.log(sum)
    }
  }
  
  
  if (process.env.USERNAME === "USER") {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9`);
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
  