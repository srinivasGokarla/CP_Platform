function runProgram(input) {
var input = input.trim().split(" ")
var number = input[0];
var k = input[1];
for(var i = 1; i < number; i++ ) {
    
    }if(i % k == 0){
        console.log(i)
}
}


if (process.env.USERNAME === "USER") {
  runProgram(`7 2`);
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
