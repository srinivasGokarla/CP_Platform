function runProgram(input) {
  input = input.trim().split("\n")
  var testcases = Number(input[0])
  var line = 1;
  for(var i = 0; i < testcases; i++) {
      var N = Number(input[line++])
      var arr = input[line++].trim().split(" ").map(Number)
      var arr1 = [];
       var new1 = 0;
      for(var j = 0; j < N; j++) {
           new1 = -1;
           for(var k = j+1; k < N; k++) {
         if(arr[j] < arr[k]) {
            new1 = arr[k];
            break;
           
         } 
      }
     arr1.push(new1)
    
  }
  console.log(arr1.join(" "))
}
}

if (process.env.USERNAME === "USER") {
  runProgram(`1
  4
  1 3 2 4`);
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
