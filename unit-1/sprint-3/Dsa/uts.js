function runProgram(input) {
 input = input.trim().split('/n');
var arr = arr[1];

output = false;

for(var i = 0; i < arr.length; i++) {
  if(arr[i] == 42){
    output = true;
    break;
  }
} if (output = true) {
  console.log("Yes");
}else {
  console.log("No");
}
}

if (process.env.USERNAME === 'BURANA PAPARAO') {
  runProgram(`5
  3 7 0 9 8`);
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