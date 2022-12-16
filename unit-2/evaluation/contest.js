
function runProgram(input) {
input = input.trim().split("\n")
var[row,col] = input[0].trim().split(" ").map(Number)
var mat = [];
for(var i = 1; i<= row; i++) {
  mat.push(input[i].trim().split(" ").map(Number))
}
traverseMat(row,col,mat)

function traverseMat(row,col,mat) {
  var ans = []
 for(i = 0;i <=row;i++) {
     for(j=col;j >= 0; j--) {
         ans.push(mat[j][i])
     }
   }
 console.log(ans.join(" "));
}
}
if (process.env.USERNAME === "Raju") {
  runProgram(`4 3
  1 8 9
  2 7 10
  3 6 11
  4 5 12`);
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
