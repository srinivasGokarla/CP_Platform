function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    var mat = [];
    for(var i = 0; i < testcases; i++) {
        var n = Number(input[line++])
        for(var j = 0; j < n; j++) {
            mat.push(input[line++].trim().split(" ").map(Number))
        }
        cirTraversal(mat,n) 
    }
    }
    function cirTraversal(mat,n) {
        var mat1 = [];
        for(var r = n-1; r >= 0; r--) {
            mat1.push(mat[r][0])
        }
        for(var cl = 1; cl <= n -1; cl++) {
            mat1.push(mat[0][cl])
        }
        for(var r = 1; r <= n -1; r++) {
            mat1.push(mat[r][n-1])
        }
        for(var cl = n - 2; cl >= 1; cl--) {
            mat1.push(mat[n-1][cl])
        }
        console.log(mat1.join(" "))
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
    