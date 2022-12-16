function runProgram(input) {
input = input.trim().split("\n")
var size = Number(input[0])
var str1 = +input[1]
var size1 = Number(input[2])
var str2 = +input[3]

for(var i = 0; i < str1.length; i++) {
    for(var j = 0; j < str2.length; j++) {
       
    } if(str[i] == str1[2]) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

}

if (process.env.USERNAME === "Raju") {
  runProgram(`5
  aabbc
  3
  abc`);
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
