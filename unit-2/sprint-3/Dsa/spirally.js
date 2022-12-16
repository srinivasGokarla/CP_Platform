function runProgram(input) {
input = input.trim().split("\n")
var size = +input[0]
var mat = []
var line = 1;
for(var i = 0; i < size; i++) {
    mat.push(input[line].trim().split(" ").map(Number))
    line++
    //console.log(mat)
}
var mat1 = []
var top = 0;
var bottom = size-1;
var left = 0;
var right = size- 1;

for(var cl = startcol; cl <= endcol; cl++ ) {
    console.log(mat[startrow][cl])
    mat1.push(mat[startrow][cl]);
    startrow++;
}
for(var r = startrow; r <= endrow;r++) {
    console.log(mat[r][endcol])
    mat1.push(mat[r][endcol]);
    endcol--;
 }
for(var cl = endcol; cl >= startcol; cl--) {
    console.log(mat[endrow][cl])
    mat1.push(mat[endrow][cl]);
    endrow--;
}
for(var r = endrow; r >= startrow; r--) {
    console.log(mat[r][startcol])
    mat1.push(mat[r][startcol])
   
}
console.log(mat1.push(" "))

         }
           
if (process.env.USERNAME === "Raju") {
  runProgram(`4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8`);
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
