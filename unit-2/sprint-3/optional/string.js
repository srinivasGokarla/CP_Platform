function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var str1 = input[0].trim().split("")
var str2 = input[1].trim().split("")
//console.log(str1,str2)
for(var i = 0; i <str1.length; i++) {
    if((str1[i] != str2[i])) {
        console.log(str1[i])
    }
}

}


if (process.env.USERNAME === "Raju") {
  runProgram(`TESTCASE
  TESOCASE`);
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
