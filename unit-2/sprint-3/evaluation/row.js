function runProgram(input) {
input = input.trim().split("\n")
console.log(input)
var testcases = Number(input[0])
var line = 1;
for(var i = 0; i < testcases; i++) {
    var [length, width] = input[line++].trim().split(" ").map(Number)
    var mat = [];
    for(var j = 0; j < length; j++) {

        mat.push(input[line++].trim().split(" ").map(Number))
    }
    console.log(mat)
    var top = 0;
    var count = 0;

    if(top == top+1) {
      count++
    } else {
        count = 0;
    }
    console.log(count)
}
 
}

if (process.env.USERNAME === "Raju") {
  runProgram(`2
  3 3
  1 2 1 
  1 3 1
  1 2 1
  3 3
  1 2 3
  1 1 3
  1 2 3`);
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
