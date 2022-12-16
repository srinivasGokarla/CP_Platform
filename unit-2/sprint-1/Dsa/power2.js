function checkpower(n){
    var check = false;
    for(var i = 1; i <= n; i++) {
        if(n % 2 != 0) {
            check = true;
            break
        } else {
            n = n / 2;
        }
    } 
    if(check == false){
        console.log("True")
    } else {
        console.log("False")
    }
}

function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var testcases = Number(input[0])
//console.log(testcases)
var line = 1;
for(var i = 0; i< testcases; i++) {
    var n = Number(input[line++])
    line++;
   // console.log(n)
   checkpower(n)


}
}
if (process.env.USERNAME === "Raju") {
  runProgram(`2
  64
  30`);
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
