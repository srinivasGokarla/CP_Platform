
function runProgram(input) {
input = input.trim().split(" ")
sum = 0;
string_value(input)

function string_value(input) {
    var letters = "abcdefghijklmnopqrstuvwxyz";
var value = 0;
    for(var i = 1; i < letters.length;i++) {
  value++;
  sum = sum + letter[i]
    }
}
}
console.log(sum);
  
  if (process.env.USERNAME === "Raju") {
    runProgram('aba');
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
  