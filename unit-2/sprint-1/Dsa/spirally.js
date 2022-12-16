function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var size = +input[0]
var mat = []
var line = 1;
for(var i = 0; i < size; i++) {
    mat.push(input[line].trim().split(" ").map(Number))
    line++
   // console.log(mat)
}
var mat1 = []
for(var cl = 0; cl <size; cl++ ) {
    //console.log(mat[0][cl])
    mat1.push(mat[0][cl])
}
for(var r = 1; r < size;r++) {
    //console.log(mat[r][size-1])
    mat1.push(mat[r][size-1])
 }
for(var cl = size-1; cl>= 0; cl--) {
    //console.log(mat[size-1][cl])
    mat1.push(mat[size-1][cl])
}
for(var r = size-2; r >= 1; r--) {
    //console.log(mat[r][0])
    mat1.push(mat[r][0])
}
for(var cl = 1; cl <= size-2; cl++) {
   // console.log(mat[1][cl])
    mat1.push(mat[1][cl])
}
for(var r = 2; r <= size-2;r++){
    //console.log(mat[2][cl])
    mat1.push(mat[r][size-2])
}
for(var cl = size-2;cl >= 1;cl--) {
  //console.log(mat[size-2][cl])
  mat1.push(mat[size-2][cl])
}
for(var r = size-3; r>= 2; r--) {
  //console.log(mat[r][1])
  mat1.push(mat[r][1])
}
for(var cl = 2; cl<= size-3; cl++) {
  // console.log(mat[2][cl])
   mat1.push(mat[2][cl])
}
for(var r = 3; r <= size-3; r++) {
  //console.log(mat[r][size-3])
  mat1.push(mat[r][size-3])
}
 for(var cl = size-4;cl >= 2;cl--) {
  //console.log(mat[size-2][cl])
  mat1.push(mat[size-3][cl])
 }
 for(var r = size-4; r>= 3; r--) {
  //console.log(mat[r][2])
  mat1.push(mat[r][2])
}
for(var cl = 3; cl<= size-4; cl++) {
  // console.log(mat[3][cl])
   mat1.push(mat[3][cl])
}
for(var r = 4; r <= size-4; r++) {
  //console.log(mat[r][size-3])
  mat1.push(mat[r][size-4])
}
for(var cl = size-5;cl >= 3;cl--) {
  //console.log(mat[size-4][cl])
  mat1.push(mat[size-4][cl])
 }
 for(var r = size-5; r>= 4; r--) {
  //console.log(mat[r][3])
  mat1.push(mat[r][3])
 }
for(var cl = 4; cl<= size-5; cl++) {
  // console.log(mat[3][cl])
   mat1.push(mat[4][cl])
}
for(var cl = size-5;cl >= 4;cl--) {
  //console.log(mat[size/2][cl])
  mat1.push(mat[size/2][cl])
 }

 
console.log(mat1.join(" "));
}

if (process.env.USERNAME === "Raju") {
  runProgram(`10
  1 2 3 4 5 6 7 8 9 10
  11 12 13 14 15 16 17 18 19 20
  21 22 23 24 25 26 27 28 29 30
  31 32 33 34 35 36 37 38 39 40
  41 42 43 44 45 46 47 48 49 50
  51 52 53 54 55 56 57 58 59 60
  61 62 63 64 65 66 67 68 69 70
  71 72 73 74 75 76 77 78 79 80
  81 82 83 84 85 86 87 88 89 90
  91 92 93 94 95 96 97 98 99 100`);
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
