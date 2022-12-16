function runProgram(input) {
input = input.trim().split("");
len = input.length
 var substring = []
for(var i = 0; i < len; i++) {
    for(var j = i; j < len; i++) {

    }
}

}

if (process.env.USERNAME === "Raju") {
  runProgram(`thisracecarisgood`);
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
