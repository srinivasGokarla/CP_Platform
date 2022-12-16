function runProgram(input) {
var mat = [[3, 1, 8],
    [2, 6, 0]]
var sum = 0;
for(var r = 0; r < mat.length; r++) {
    for(var cl = 0; cl < mat[r]; cl++) {
        if(r % 3 == 0)
        sum = sum + r;
       // console.log(sum);
    }
    console.log(sum);
    }
}


    
if (process.env.USERNAME === "Raju") {
  runProgram(`2 3
  3 1 8
  2 6 0`);
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