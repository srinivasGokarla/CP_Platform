function runProgram(input) {
    input = input.trim().split("\n")
    //console.log(input)
    var testcases = Number(input[0])
    //console.log(testcases)
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var [size,target] = input[line++].trim().split(" ").map(Number);
      //  console.log(size,target)
          var arr = (input[line++].trim().split(" ").map(Number));
      //  console.log(arr)
        var count = 0;
        for(var k = 0; k < arr.length; k++) {
          for(var l = k+1; l < arr.length; l++) {
            if((arr[k] + arr[l]) % target == 0) {
              count++;
            }
           
        }
      
    }
    console.log(count)
  }
}
  
  if (process.env.USERNAME === "USER") {
    runProgram(`2
    3 2
    1 3 2
    5 4
    3 2 2 1 5`);
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
  
  