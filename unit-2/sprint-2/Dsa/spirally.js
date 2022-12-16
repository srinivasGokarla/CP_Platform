function runProgram(input) {
    input = input.trim().split("\n")
    var n = Number(input[0])
    var line = 1;
    var mat = [];
    for(var i = 0; i < n; i++) {
    mat.push(input[line++].trim().split(" ").map(Number))
    //console.log(mat,n,input)
    }
    spirallyTraversingAMatrix(n, mat)
   }
      function spirallyTraversingAMatrix(n, mat) {
        var mat1 = [];
        var top = 0;
        var left = 0;
        var right = n - 1;
        var bottom = n - 1;
        var count = 0;
        var size = n * n;
        while (size > count) {
            for(var cl = left; cl <= right; cl++) {
                mat1.push(mat[top][cl])
                console.log(mat[top][cl])
                count++;
            }
            top++;
            for(var r = top; r <= bottom; r ++) {
                mat1.push(mat[r][right])
             console.log(mat[r][right])
                count++;
            }
            right--;
            for(var cl = right; cl >= left; cl--) {
                mat1.push(mat[bottom][cl])
              console.log(mat[bottom][cl])
                count++;
            }
            bottom--;
            for(var r = bottom; r >= top; r--) {
                mat1.push(mat[r][left])
              console.log(mat[r][left])
                count++;
            }
            left++;
        }
     console.log(mat1.join(" "))
      }
      
      if (process.env.USERNAME === "USER") {
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
    