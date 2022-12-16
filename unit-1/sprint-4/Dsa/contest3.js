function runProgram(input) {
input = input.trim().split("\n")
var n = input[0].trim().split(" ").map(Number)
var target = n[1];
var arr = input[1].trim().split(" ").map(Number)
var count = 0;

for(var i = 0; i < arr.length; i++) {
   
    for(var j = 0; j < arr.length;j++) {
        
        if(i != j) {
            if(arr[i] + arr[j] == target) {
                count++;
            }
        }
            }
        }
        console.log(count/2);
    }

if (process.env.USERNAME === "Raju") {
  runProgram(`5 9
  3 0 6 2 7`);
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
