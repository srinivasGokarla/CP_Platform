function runProgram(input) {
    input = input.trim().split("\n")
    console.log(input)
var i = Number(input[0]);
console.log(i)
var length = Number(input[1]);
console.log(length)
var str = input[2].trim().split("")
console.log(str)
var sum = 0;
for(var i = 30; i < str.length; i++) {
    sum = sum + i;
    console.log(sum)
}

}

if (process.env.USERNAME === "USER") {
  runProgram(`30
  3
  abc`);
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
