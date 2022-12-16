function runProgram(input) {
  input = input.trim().split("\n")
  var N = Number(input[0])
  var str = input[1].trim().split("")
  
//console.log(str,N)
var output = "";
console.log(subsequence(str))
}
function subsequence(str,output) {
if(str.length = 0) {
    return 
} else {
   subsequence(str.substring[1],output+ str[0])
   return subsequence(str.substring[1],output)
}
}

if (process.env.USERNAME === "USER") {
  runProgram(`4
  abcd`);
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
