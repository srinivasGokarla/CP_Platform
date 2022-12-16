function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var n = Number(input[0])
var arr = input[1].trim().split(" ").map(Number)

maximumOccuringElement(arr,n)
}
var obj = {}
function maximumOccuringElement(arr,n) {
var out = "";
var max = 0;
for(var i = 0; i < n; i++) {
  if(obj[arr[i]] == undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]]++;
  }
}
for(key in obj) {
  if(max < obj[key]) {
    max = obj[key]
    out = key;
  }
}
console.log(out)
}

if (process.env.USERNAME === "USER") {
  runProgram(`5
  0 2 0 6 9`);
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
