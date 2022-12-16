function runProgram(input) {
var[left, right, k] = input.trim().split(" ").map(Number);
var count = 0;
for(var i = left; i <= right; i++) {
   if( i % k == 0) {
       count++;
   }
  
}
console.log(count)
}


if (process.env.USERNAME === "USER") {
  runProgram(`1 10 3`);
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
