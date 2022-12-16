function runProgram(input) {
var i = 5;
if(input % i == 0) {
    console.log(Math.floor(input/i))
} else {
    console.log(Math.floor(input/i + 1))
}

}
if (process.env.USERNAME === "Raju") {
  runProgram(`12`);
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
