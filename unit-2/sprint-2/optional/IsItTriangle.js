function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0]);
var line = 1;
for(var i = 0; i < testcases; i++) {
    var triangle = input[line++].trim().split(" ").map(Number);
    var a = triangle[0];
    var b = triangle[1];
    var c = triangle[2];
    if(a <(b + c) && b < (c + a) && c < (a + b)) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}
}


if (process.env.USERNAME === "USER") {
  runProgram(`4
  4 5 13
  7 1 8
  2 5 4
  2 2 2
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
