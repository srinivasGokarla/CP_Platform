function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var N = Number(input[line++])
      var arr = input[line++].trim().split(" ").map(Number)
     // console.log(arr,N,testcases)
      var sum = 0;
      for(var j = 0; j < arr.length; j++) {
          if(arr[j] % 2 != 0) {
          sum = sum + arr[j]
          }
        }
          if(sum % 2 == 0) {
              console.log("It is Even")
          } else {
              console.log("It is Odd")
          }
      }
      
    }
  
  
  
  if (process.env.USERNAME === "USER") {
    runProgram(`2
    3
    1 2 3
    5
    2 2 2 2 1`);
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
  