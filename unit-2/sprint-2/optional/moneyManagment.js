function runProgram(input) {
var input = input.trim().split("\n")
var N = Number(input[0])
var arr = input[1].trim().split(" ").map(Number);
var salary = Number(input[2]);
var sum = 0;
for(var i = 0; i < arr.length; i++) {
  sum = sum + arr[i]
} if (sum > salary) {
    console.log("Debt")
} else if(sum < salary) {
    console.log("Save")
} else if(sum == salary) {
    console.log("Neutral")
}
}


if (process.env.USERNAME === "USER") {
  runProgram(`5
  1 2 3 4 5
  16`);
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
