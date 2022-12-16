function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var n = input[0].trim().split(" ").map(Number)
//console.log(n)
var target = n[1]
//console.log(target)
var arr = input[1].trim().split(" ").map(Number)
//console.log(arr)
forward(arr,target)
}
function forward(n,target) {
  var count = 0;
  for(var i = 0; i < n.length; i++){
      t = n[target -1]
      if(t == 0) {
        break;
      }
      if(n[i] >= t) {
        count++;
      }
     
  }
  console.log(count)
}



if (process.env.USERNAME === "Raju") {
  runProgram(`8 5
  10 9 8 7 7 7 5 5`);
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
