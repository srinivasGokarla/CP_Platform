function runProgram(input) {
  input = input.trim().split("\n")
  //console.log(input)
  var testcases = Number(input[0])
  var line = 1;
  
  for(var i =0; i < testcases; i++) {
      var [n,m] = +input[line++]
      var mat = [];
      for(var j = 0; j < n; j++) {
      mat.push(input[line++].trim().split(" ").map(Number))
      
      }

    }
    spiralTraversal(n, m, mat)
   }
   function spiralTraversal(n, m, mat){
 
    var top = 0;
   var left = 0;
   var right = m-1; 
   var bottom = n-1; 
   var count=0;
   var size = n * m;
   var mat1 = [];
    while(count<size){
     for(var r = top; r <= bottom && count < size; r++) {
        mat1.push(mat[r][left]);
        count++;
 }
     left++;
   
     for(var cl = left; cl <= right && count < size; cl++){
       mat1.push(mat[bottom][cl]);
       count++;
     }
     bottom--;
 
     for(var r = bottom; r >= top && count < size; r--){
       mat1.push(mat[r][right]);
       count++;
     }
     right--;
 
     for(var cl = right; cl >= left && count < size; cl--){
       mat1.push(mat[top][cl]);
       count++;
   }
   top++;
}
console.log(mat1.join(" "));
}
  
  if (process.env.USERNAME === "Raju") {
    runProgram(`2
    3
    7 8 1
    6 8 2
    5 4 3
    2
    1 2
    3 4`)
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
  