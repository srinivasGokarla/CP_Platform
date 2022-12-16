function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1;
for(var i = 0; i < testcases; i++) {
    var N = Number(input[line++])
    var matrix = [];
    for(var j = 0; j < N; j++) {
        matrix.push(input[line++].trim().split(" ").map(Number))
    }
    
}
spiralTraversalV(N, matrix)
}
function spiralTraversalV(N, matrix){
    var top = 0;
    var left = 0;
    var right = N - 1;
    var bottom = N - 1;
    var count = 0;
    var mat = [];
     var size = N* N;
     while(count < size) {
         for(var r = top; r <= bottom; r++) {
             mat.push(matrix[r][left])
             count++;
         }
         left++;
         for(var cl = left; cl <= right; cl++) {
             mat.push(matrix[bottom][cl])
             count++;
         }
         bottom--;
         for(var r = bottom; r >= top; r--) {
             mat.push(matrix[r][right])
             count++;
         }
         right--;
         for(var cl = right; cl >= left; cl--){
             mat.push(matrix[top][cl])
             count++;
         }
         top++;
     }
     console.log(mat.join(" "))
  
}


if (process.env.USERNAME === "USER") {
  runProgram(`1
  3
  1 2 3
  4 5 6
  7 8 9`);
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
