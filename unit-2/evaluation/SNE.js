function runProgram(input) {
  input = input.trim().split("\n")
  var N = Number(input[0])
  var arr = input[1].trim().split(" ").map(Number)
  var count = 0;
  for(var i = 0; i < N; i++) {
      if(arr[i] <= arr[i-1]) {
count++
      }
     
  }
  console.log(count)
}


if (process.env.USERNAME === "USER") {
  runProgram(`8
  39 27 11 4 24 32 32 1`);
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
