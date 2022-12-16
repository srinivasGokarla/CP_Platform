function runProgram(input) {
var testcases =  Number(input[0])
 var line = 1;
 var str1 = input[line].trim().split("")
 line++
 var str2 = input[line].trim().split("")
 var reverse = "";
 for(var i = str1.length -1; i >= 0;i--) {
 reverse = str1[i-1]
console.log(reverse)

 }
}

if (process.env.USERNAME === "Raju") {
  runProgram(`3
  hi there
  hello  world
  a  b`);
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