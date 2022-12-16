function runProgram(input) {
var input = input.trim().split("\n")
var size = Number(input[0]);
var str = input[1];
for(var i = 0 ; i < str.length; i++) {
    if(i % 2 == 0) {
        console.log(arr[i])
    }
}
}


if (process.env.USERNAME === "USER") {
  runProgram(`6
  ankush`);
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
