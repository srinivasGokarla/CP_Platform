function runProgram(input) {
    input = input.trim().split("\n")
    //console.log(input)
    var testcases =  Number(input[0])
   // console.log(testcases)
    var line = 1;
    for(var m = 0; m < testcases; m++) {
    var n = Number(input[line++].trim().split(" ").map(Number));
   // console.log(n)
    var mat = [];
   for(var l = 0; l < n; l++){
       
        mat.push(input[line++].trim().split(" ").map(Number))
        
}

    for(var i = 0; i < (n/2); i++) {
        for(var j = i; j < n-i-1; j++) {
          var temp = mat[i][j];
            mat[i][j] = mat[n-j-1][i];
            mat[n-j-1][i] = mat[n-i-1][n-j-1];
            mat[n-i-1][n-j-1] = mat[j][n-i-1];
            mat[j][n-i-1] = temp;
            
        }
        
         
      }
      for(var k = 0; k < mat.length; k++) {
        console.log(mat[k].join(" "));
        }
}
}

if (process.env.USERNAME === "Raju") {
  runProgram(`2
  4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8
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
