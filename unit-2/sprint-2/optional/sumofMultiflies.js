function runProgram(input) {
    var input = input.trim().split(" ")
    var X = input[0];
    var K = input[1];
    var Y = input[2];
    
    var sum = 0;
    for(var i = 1; i <= K; i++) {
     var arr = i * X;
     if(arr % Y == 0) {
       sum = sum + arr;
          
           }
      
      }  
       console.log(sum)
    }
    
    if (process.env.USERNAME === "USER") {
      runProgram(`3 10 5`);
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
    