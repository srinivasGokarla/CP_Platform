function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var arr = input[1].trim().split(" ").map(Number)
for(var i = 0; i < arr.length; i++) {
    if(math.floor(arr.length[i]/2) < arr[i+1] && math.floor(arr.length[i]/2) > arr[i-1]) {
     console.log(math.floor(arr.length[i]/2))
    } else {
        console.log("-1")
    }
}
}


if (process.env.USERNAME === "USER") {
  runProgram(`5
  4 3 6 7 8`);
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
