function runProgram(input) {
    var[one, two, three, four, five] = input.trim().split(" ").map(Number)
    var sum = ( (one * 2) +(two * 2)+ (three* 2)+ (four*2)+(five* 2))
    console.log(sum)
   }
   
   
   if (process.env.USERNAME === "USER") {
     runProgram(`1 2 3 4 5`);
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
   