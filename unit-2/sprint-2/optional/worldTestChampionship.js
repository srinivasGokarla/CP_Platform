function runProgram(input) {
    var input = input.trim().split("\n")
    var IndPoints = Number(input[0]);
    var AusPoints = Number(input[1]);
    var IndMatches = Number(input[2]);
    var AusMatches = Number(input[3]);
    if(IndPoints >  AusPoints) {
        console.log("India")
    } else if(IndPoints <  AusPoints) {
        console.log("Australia")
    } else if(IndMatches < AusMatches) {
        console.log("India")
    } else if(IndMatches > AusMatches) {
        console.log("Australia")
    } else if(IndPoints ==  AusPoints && IndMatches == AusMatches) {
        console.log("Play another game!")
    }
    }
    
    
    if (process.env.USERNAME === "USER") {
      runProgram(`580
      500
      12 
      10`);
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
    