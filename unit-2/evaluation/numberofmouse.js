function runProgram(input) {
  input = input.trim().split("\n")
  var testcases = Number(input[0])
  var line = 1;
  for(var i = 0; i < testcases; i++) {
      var N = Number(input[line++])
      var str = input[line++].trim()
      console.log(str)
      var count = 0;
      for(var j = 0; j < str.length;j++) {
          var sub = "";
for(var k = j; k < str.length; k++) {
    sub = sub + str[k]
    if(sub = "mouse") {
        count++;
    }
}
      }
      console.log(count)
  }
}


if (process.env.USERNAME === "USER") {
  runProgram(`2
  7
  mousems
  8
  wimousee`);
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
