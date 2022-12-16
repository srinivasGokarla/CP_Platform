function runProgram(input) {
var input = input.trim().split(" ")
var one = input[0]
var two = input[1]
if(one % 2 == 0 && two % 2 == 0) {
    console.log("Even")
} else if(one % 2 == 1 && two % 2 == 1) {
    console.log("Odd")
} else {
    console.log("Even-Odd")
}
}


if (process.env.USERNAME === "USER") {
  runProgram(`3 6`);
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
