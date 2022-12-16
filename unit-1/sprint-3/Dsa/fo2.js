function runProgram(input) {
    input = input.trim().split('\n')
    var arr = input[1].trim().split(" ").map(Number)
    var output = -1;
    for(var i = 0; i <arr.length-1; i++) {
        if(arr[i] == 2) {
        output = arr[i + 1];
            break;
        } 
        }
        console.log(output)
        }
    

    
    if (process.env.USERNAME === 'Raju') {
      runProgram(`5
      3 4 2 0 1`);
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
