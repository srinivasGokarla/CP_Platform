function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var testcases = Number(input[0])
var str = input[1].trim().split("")
//console.log(str)

var obj = {};
for(var i = 1; i < str.length;i++) {
  if(obj[str[i]] === undefined){
    obj[str[i]] = 1;
  } else {
    obj[str[i]] += 1;
    console.log(obj);
    obj
  }
}

}

if (process.env.USERNAME === "Raju") {
  runProgram(`5
  manas`);
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


