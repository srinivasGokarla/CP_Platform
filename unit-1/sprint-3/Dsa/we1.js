function runProgram(input) {
input = input.trim().split('\n')
var arr = input[1].trim().split(" ").map(Number)
var ans = 0;
for(var i = 0; i <arr.length; i++) {
    if(arr[i] == 2) {
        ans = arr[i + 1];
        console.log(ans);
    } else {
        console.log(-1)
    }
}
}

if (process.env.USERNAME === 'BURANA PAPARAO') {
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
 