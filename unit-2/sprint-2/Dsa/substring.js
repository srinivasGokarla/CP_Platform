function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1;
for(var l = 0; l< testcases; l++) {
var size = Number(input[line++])
var str = input[line++].trim().split("")
// console.log(input)
// console.log(testcases)
// console.log(size)
// console.log(str)
for(var i = 0; i < str.length; i++) {
  for(var j = i; j < str.length; j++) {
    sub_str = " "
    for(var k = i; k <= j; k++) {
      sub_str = sub_str + str[k]
      //console.log(sub_str)
    }
    console.log(sub_str)
  }
 
}
}
}
if (process.env.USERNAME === "Raju") {
  runProgram(`1
  4 
  aman`);
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
