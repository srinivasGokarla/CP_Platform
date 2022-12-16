function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0]);
var line = 1;
for(var i = 0; i < testcases; i++) {
    var n = Number(input[line++])
    var mat = [];
    for(var j = 0; j < n; j++) {
        mat.push(input[line++].trim().split(" ").map(Number));
    }
    var mat1 = [];
    for(var r = 0; r < n; r++) {
        for(var cl = 0; cl < n; cl++) {
            if(r == 0) {
                mat1.push(mat[r][cl])
            } else if(r + cl == n - 1) {
                mat1.push(mat[r][cl])
            } else if(r == n - 1) {
                mat1.push(mat[r][cl])
            }
        }
    }
    console.log(mat1.join(" "));
}
}

if (process.env.USERNAME === "USER") {
  runProgram(`1
  3
  1 2 3
  4 5 6
  7 8 9
  `);
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
