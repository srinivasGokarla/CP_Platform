function runProgram(input) {
    var input = input.trim().split("\n")
    var size = Number(input[0]);
    var str = input[1];
    var count = 0; 
    for(var i = 0; i < str.length; i++){
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            count++;
        }
        } if( count >= 1) {
            console.log("true")
        } else {
            console.log("false")
        }
    }
    
    
    
    
    if (process.env.USERNAME === "USER") {
      runProgram(`4
      stvr`);
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
s    