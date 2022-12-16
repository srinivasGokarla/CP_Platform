function runProgram(input) {
  input = input.trim().split("\n");
  var testcases = +input[0];
  var line = 1;
  for(i = 0; i < testcases; i++) {
      var n = +input[line++];
      var arr = [];
  
      for(var j = 0; j < n; j++) {
          arr.push(input[line++].trim().split(" ").map(Number));
      }
      var mat = [];
          for(r = 0; r < n; r++) {
              for(cl = 0; cl < n; cl++){
              if(r == 0){
                console.log(arr[cl][r])
                mat.push(arr[cl][r])
              } else if(r + cl == n -1 ) {
                console.log(arr[r][cl])
                mat.push(arr[cl][r])
              } else if(r == n - 1) {
                mat.push(arr[cl][r])
              
            }
            }
      }
      console.log(mat.join(" "));
  }
  }
  
  if (process.env.USERNAME === "Raju") {
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
  