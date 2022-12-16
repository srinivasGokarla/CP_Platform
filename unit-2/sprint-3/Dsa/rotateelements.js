function runProgram(input) {
var input = input.trim().split("\n")
//console.log(input)
var n = Number(input[0])
//console.log(n)
var line = 1;
var mat = [];
for(var i = 0; i < n; i++) {
    mat.push(input[line++].trim().split(" ").map(Number))

}
    top = 0;
    left = 0;
    right = n -1;
    bottom = n - 1;
  mat1 = [];
  count = 0;
 var size = n*n;
  while (count < size) {
    for(var i = 0; i < (Math.floor(n/2)); i++) {
        prev = mat[top+1][left]
        mat1.push(prev)
        for(var j = left; j <= right; j++) {
            temp = mat[top][j];
            mat[top][j] = prev;
            prev = temp; 
            count++; 
            mat1.push(prev)
           
        }
        top++;
       
        for(var j = top; j <= bottom; j++) {
            temp = mat[j][right];
            mat[j][right] = prev;
            prev = temp;
            count++; 
            mat1.push(prev)
        }
        right--;
        for(var j = right; j >= left; j--) {
            temp = mat[bottom][j];
            mat[bottom][j] = prev;
            prev = temp;
            count++; 
            mat1.push(prev)
        }
        bottom--;
        for(var j = bottom; j >= top; j--) {
            temp = mat[j][left];
            mat[j][left] = prev;
            prev = temp;
            count++; 
            mat1.push(prev)
        }
        left++;
      } 
     
      }
       
      for(var k = 0; k < mat.length; k++) {
        console.log(mat[k].join(" "));
    }
   
}


if (process.env.USERNAME === "Raju") {
  runProgram(`4
  1 2 3 4
  1 2 3 4
  1 2 3 4
  1 2 3 4`);
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
