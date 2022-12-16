function runProgram(input) {
  input = input.trim().split("\n")
  var testcases = Number(input[0])
  var line = 1;
  for(var i = 0; i< testcases;i++) {
      var N = Number(input[line++])
      var arr = input[line++].trim().split(" ").map(Number)
      var count = 0;
      for(var j = 0; j < arr.length; j++) {
        
           if(arr[j] > arr[j-1] && arr[j] > arr[j+1]) {
              count++;
              
           } else {
               console.log("-1")
           }
          }
        }
      }
  



if (process.env.USERNAME === "USER") {
  runProgram(`2
  2
  1 2
  10
  884 729 768 201 266 494 597 328 705 287`);
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
