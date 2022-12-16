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
         for(j=0;j <=col; j++) {
        ans.push(mat[j][i])
         }
       }
       console.log(ans);
    }
    }
    if (process.env.USERNAME === "Raju") {  
      runProgram(`5 4
      0 0 0 0
      1 1 1 1
      2 2 2 2
      3 3 3 3
      4 4 4 4 `);
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
    