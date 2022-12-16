function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var line = 1;
  var arr = [];
  for(i = 0; i < n; i++) {
     
          arr.push(input[line++].trim().split(" ").map(Number));
      }
     
      var sum = 0;

          for(r = n-1; r >= 0; r--) {
           //console.log(arr[r][0]);
          sum = sum + arr[r][0]
      }
      for(var cl = 1; cl < n; cl++) {
        //console.log(arr[0][cl])
        sum = sum + arr[0][cl]
      }
      for(var r = 1; r < n;r++){
        //console.log(arr[r][n-1])
        sum = sum + arr[r][n-1]
      }
      for(var cl = n-2; cl >= 1;cl--){
        //console.log(arr[n-1][cl])
        sum = sum + arr[n-1][cl]
      }
 // console.log(sum)
 for(var i = 1; i < n -1; i++) {
   for(var j = 1; j < n -1; j++) {
     if(i == j) {
        sum = sum + arr[i][j]
     }
   }
 }
 for(var i = 1; i < n -1; i++) {
   for(var j = 1; j < n - 1; j++) {
     if(i == j) {
       continue;
     } else {
       if(i + j == n-1) {
         sum = sum + arr[i][j]
       }
     }
   }
 }
 console.log(sum)
  }
  
  
  if (process.env.USERNAME === "Raju") {
    runProgram(`5
    1 2 3 4 5
    6 7 8 9 1
    2 3 4 5 6
    7 8 9 1 2
    3 4 5 6 7`);
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
  