function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var single = Number(input[1])
var arr = input[2].trim().split(" ").map(Number)
//console.log(testcases,single, arr)
for(var i = 0; i < arr.length; i++) {
   if(arr[i] !== arr[i+1]) { 
   }
    console.log(arr[i])
}

}

if (process.env.USERNAME === "Raju") {
  runProgram(`1
  5
  1 2 1 3 4 4 5 2 3`);
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
