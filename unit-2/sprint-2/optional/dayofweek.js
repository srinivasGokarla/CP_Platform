function runProgram(input) {
    var input = input[0]
    var N = Number(input[1])
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    for(var i = 0; i < days.length;i++){
        console.log(days[i+3])
    }

}

if (process.env.USERNAME === "Raju") {
  runProgram(`Wednesday
  8`);
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
