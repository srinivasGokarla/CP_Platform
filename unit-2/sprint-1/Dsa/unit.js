function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0]);
var line = 1;
for(var i = 0;i <= testcases;i++) {
    var size  = input[line].trim().split(" ").map(Number)
    var target = size[1]
    var arr = input[line++].trim().split(" ").map(Number)
    line++;
console.log(size)
var count = 0;
for(var j = 0; j <= arr.length;i++) {
    if(arr[j] == arr[+1]) {
        count++;
        console.log(count)
    }
}
}
}

if (process.env.USERNAME === "Raju") {
  runProgram(`2
  3 0
  1 3 2
  5 4
  3 2 2 1 5`);
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
