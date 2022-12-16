
function runProgram(input) {
var str = input
tempt = 1;
ans = 1;

for(var i = 0; i< str.length; i++) {
    if(str[i] == str[i-1]) {
        tempt++;

    } else {
        ans = Math.max(tempt,ans)
        tempt = 1;
    }
}
ans = Math.max(tempt,ans)
console.log(ans);
}

if (process.env.USERNAME === "Raju") {
  runProgram(`ATTCGGGA`);
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