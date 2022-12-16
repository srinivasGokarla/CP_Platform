function runProgram(input) {
  var sum = 0;
  var count = 0;
  for(var i = 1; i < input; i++) {
      for(var j = 1; j <= i;j++) {
          sum = sum + j;

      } if( sum <= input) {
          count++;
      } else {
          break;
      }
  }
  console.log(count)
}


if (process.env.USERNAME === "USER") {
  runProgram(`25`);
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
