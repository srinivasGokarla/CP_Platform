function runProgram(input) {
    input = input.trim().split("\n")
     console.log(input)
     var testcases =  Number(input[0])
     console.log(testcases)
     var line = 1;
     for(var i = 0; i < testcases; i++) {
     var n = Number(input[line++].trim().split(" ").map(Number));
     console.log(n)
     var mat = [];
    for(var j = 0; j < n; j++){
        
         mat.push(input[line++].trim().split(" ").map(Number))
         
     }
   
}
}
if (process.env.USERNAME === "Raju") {
  runProgram(`3
  4
  *.*.
  .*.*
  *.*.
  .*.*
  3
  .*.
  *.*
  .*.
  3
  ..*
  **.
  ..*`);
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
