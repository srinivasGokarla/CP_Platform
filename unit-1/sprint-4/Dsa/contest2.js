function runProgram(input) {
var str = input.trim().split("")

    function checkequality (str) {
       return (str.charAt(0) == str.chartAt(str.length -1)) ;
    }
    function countsubstringwithequalends (str) {
        var n = str.length
        var count = 0;
        for(var i = 0; i < n; i++) {
            for(var len = 1; len <= n - i; i++) {
                count++;
                console.log(count)
            }
    }
//console.log(count)
    }
    }
    
    if (process.env.USERNAME === "Raju") {
      runProgram(`abcab`);
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
   