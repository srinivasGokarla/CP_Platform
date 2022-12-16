function runProgram(input) {
    input = input.trim().split("\n")
    console.log(input)
    var testcases = Number(input[0])
    console.log(testcases)
    var line = 1;
    for(var i = 0; i < testcases; i++) {
      var N = Number(input[line++])
      var mat = [];
      for(var j = 0; j < N; j++) {
        mat.push(input[line++].trim().split(" ").map(Number))
        console.log(mat, testcases, N)
      }
    }
  }
      var mat1 = [];
      for(var r = N - 1; r >= 1; r--) {
        mat1.push(mat[r][0])
      }
      for(var cl = 0; cl < N; cl++) {
        mat1.push(mat[cl][cl])
      }
      for(var r = N-2; r >= 0; r--) {
        mat1.push(mat[r][N-1])
      }
      console.log(mat1.join(" "));
    
    
    
    
    if (process.env.USERNAME === "USER") {
      runProgram(`2
      3
      1 2 3
      4 5 6
      7 8 9
      4
      1 2 3 4
      5 6 7 8
      9 10 11 12
      13 14 15 16`);
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
    