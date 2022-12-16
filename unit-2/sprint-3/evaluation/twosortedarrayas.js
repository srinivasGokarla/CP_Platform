function runProgram(input) {
  input = input.trim().split("\n")
  var testcases = Number(input[0])
  var line = 1;
  for(var i = 0; i < testcases; i++) {
      var N = Number(input[line++])
      var arr = input[line++].trim().split(" ").map(Number)
      var arr1 = input[line++].trim().split(" ").map(Number)
   
     
      
     }
    }

if (process.env.USERNAME === "USER") {
  runProgram(`1
  6
  1 2 2 3 4 5
  4 4 3 2 1 1`);
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
