function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var N = Number(input[0])
var arr1 = input[1].trim().split(" ").map(Number)
//console.log(arr1)
var M = Number(input[2])
var arr2 = input[1].trim().split(" ").map(Number)

if(arr1 == arr2){
    console.log("Yes")
} else {
    console.log("No")
}
}


if (process.env.USERNAME === "USER") {
  runProgram(`6
  1 2 2 3 4 5
  6
  1 2 2 3 4 5`);
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
