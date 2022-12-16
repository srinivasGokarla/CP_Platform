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
        for(var r = n -1; r >= 0; r--) {
            console.log(arr[r][0])
            mat.push(arr[r][0])
        }
            for(var cl = 1; cl < n; cl++){
                console.log(arr[cl][cl])
                mat.push(arr[cl][cl])
            
        } 
       for(var r = n-2; r>=0; r--){
           console.log(arr[r][n-1])
           mat.push(arr[r][n-1])
       }
       console.log(mat.join(" "))
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
    