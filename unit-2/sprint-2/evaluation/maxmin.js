function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var arr = input[1].trim().split(" ").map(Number)
var first = 0;
var second = 0;
var third = 0;
for(var i = 0; i < arr.length; i++) {
    if(arr[i] > first) {
        third = second;
        second = first;
        first = arr[i]
    } else if(arr[i] > second) {
        third = second;
        second = arr[i]
    } else if(arr[i] > third) {
        third = arr[i]
    }
    console.log(first, second,third);
    var fs = 0;
var ss = 0;
var ths = 0;
for(var i = 0; i < arr.length; i++) {
    if(arr[i] > fs) {
        ths = ss;
        ss = fs;
        fs = arr[i]
    } else if(arr[i] < ss) {
        ts = ss;
        ss = arr[i]
    } else if(arr[i] > third) {
        ths = arr[i]
    }
    console.log(fs, ss,ths)
}
}
}



if (process.env.USERNAME === "USER") {
  runProgram(`8
  1 2 3 4 2 1 6 5`);
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
