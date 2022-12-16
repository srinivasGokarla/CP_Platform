function runProgram(input) {
  input = input.trim().split("\n")
  var N = Number(input[0])
  var arr = input[1].trim().split(" ").map(Number)
 // console.log(N,arr)
  var sum = 0;
  arr.sort(function(a,b){return a-b});
  for(var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  console.log(Math.floor(sum/2))
}


if (process.env.USERNAME === "USER") {
  runProgram(`2
  1 3 1 2`);
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
