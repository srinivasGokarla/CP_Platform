function runProgram(input) {
input = input.trim().split("\n")
var[r1, cl1, r2,cl2] = input[0].trim().split(" ").map(Number)
var mat1 =[], mat2 = [];
for(var i = 0; i < r1; i++) {
    mat1.push(input[i+1].trim().split(" ").map(Number));
    for(var i = r1 +1; i< r1+ 1;i++) {
        mat2.push(input[i+1].trim().split(" ").map(Number));
    }
}
}

if (process.env.USERNAME === "Raju") {
  runProgram(`2 2 2 2
  1 2
  3 4
  2 3
  4 5`);
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