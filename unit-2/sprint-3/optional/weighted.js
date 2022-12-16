
function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var testcases = Number(input[0]);
//console.log(testcases)
var line = 1;
for(var i = 0; i < testcases; i++) {
    var size = Number(input[line++]);
    var arr = input[line++].trim().split(" ").map(Number)
    //console.log(size,arr)
    weighted(arr)
}
}
function weighted(arr) {
    var ans = 0;
    var w = 1;
    for(var i = 0; i < arr.length; i++) {
        ans = ans + (w * arr[i]);
        w++;
    }
    console.log(ans)
}

if (process.env.USERNAME === "Raju") {
  runProgram(`2
  5
  1 2 3 4 5
  2
  100 1`);
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
