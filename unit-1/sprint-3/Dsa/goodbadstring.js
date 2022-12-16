function runProgram(input) {
input = input.trim().split("\n");
var testcases = Number(input[0]);
var line = 1;
for(var i = 0; i < testcases; i++) {
    var str = input[line].trim().split("")
    line++;
    var str1 = []
    for(var j = 0; j < str.length;j++) {
      if(str[j] != str[j -1]) {
        str1.push(str[j])
      }
    }
    console.log(str1.join(""));
}

}

if (process.env.USERNAME === "Raju") {
  runProgram(`3
  abb
  aaab
  ababa`);
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
