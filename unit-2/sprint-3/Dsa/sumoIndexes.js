function runProgram(input) {
    input = input.trim().split("\n")
   // console.log(input)
    var[N,M] = input[0].trim().split(" ").map(Number);
    var line = 1;
    var mat = [];
    var arr = []
    var sum = 0;
    for(var i = 0; i < N; i++) {
        mat.push(input[line++].trim().split(" ").map(Number));
       for(var j = 0; j < mat.length; j++) {
         sum = j + j
         console.log(sum)
       }
  
    }
  
  }
  
  
  if (process.env.USERNAME === "USER") {
    runProgram(`3 2
    1 2 
    3 4
    5 6
    `);
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
  