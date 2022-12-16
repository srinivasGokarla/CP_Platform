function runProgram(input) {
    input = input.trim().split("\n")
    var n = Number(input[0])
     var line = 1;
 //  console.log(n)
     var mat = [];
    for(var j = 0; j < n; j++){
         mat.push(input[line++].trim().split(" ").map(Number))
        
  }
      
   // console.log(mat)
  
      var mat1 = []
      var top = 0;
      var bottom = n - 1;
      var left = 0;
      var right = n - 1;
      var count = 0;
      var size = n*n;
      while (count < size) {
          for(var cl = left; cl <= right; cl++) {
             // console.log(mat[top][cl]);
              mat1.push(mat[top][cl]);
              count++;
          }
          top++;
          for(var r = top; r <= bottom; r++) {
             // console.log(mat[r][right])
              mat1.push(mat[r][right]);
              count++;
          }
          right--;
          for(var cl = right; cl >= left; cl--) {
            //console.log(mat[bottom][cl])
            mat1.push(mat[bottom][cl]);
            count++;
          }
          bottom--;
          for(var r = bottom; r >= top; r--) {
             // console.log(mat[r][left])
              mat1.push(mat[r][left])
              count++;
          }
          left++;
          
      }
      console.log(mat1.join(" "))
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