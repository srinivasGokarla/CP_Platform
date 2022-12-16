function runProgram(input) {
  input = input.trim().split("\n");
  
  var testcases = Number(input[0]);
    var line = 1;
    for(var i = 0; i < testcases; i++){
      var N = Number(input[line]);
          line++
            var table = []
      for(var j = 1; j <= 10; j++) {
          t = j * N;
        table.push(t);
    
      }
       console.log(table.join(" "));
      }
  }
  
  
  if (process.env.USERNAME === "Raju") {
    runProgram(`2
    2
    3`);
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
  