function runProgram(input) {
    var input = input.trim().split(" ")
    var a = input[0];
    var b = input[1];
    var c = input[2];
    if(a > b && a < c || a > c && a < b) {
        console.log(a)
    }  else if(b > a && b < c || b > c && b < a) {
        console.log(b)
    }else if(c > a && c < b || c > b && c < a) {
        console.log(c)
    }
    }
    
    if (process.env.USERNAME === "USER") {
      runProgram(`3 7 5`);
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
    