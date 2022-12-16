function runProgram(input) {
  input = input.trim().split("\n")
  var mat = []
  var prod = 1
  var[n,m] = input[0].trim().split(" ").map(Number)
  var line = 1
   for(var i = 0; i < n; i++) {
       mat.push(input[line++].trim().split(" ").map(Number))
for(var r = 0; r < mat.length; r++) {
    for(var cl = 0; cl < mat.length;cl++) {
   prod = prod * mat[r][cl]
   console.log(prod) 
    }
    
}

   }
  // console.log(mat)
  
  
}


if (process.env.USERNAME === "USER") {
  runProgram(`2 3
  1 2
  3 4
  5 6`);
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
