function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var testcases = Number(input[0])
var line = 1;
for(var i = 0; i < testcases; i++){
    var size = Number(input[line++])
    var str = input[line++].trim().split("")
  //   console.log(testcases);
  //  console.log(size)
  //   console.log(str)
var k = 0;
var res = "";
while(k < size) {
  var count = 0;
  for(var j = k; j < size; j++) {
    if(str[k] != str[j]) {
      break;
    } else {
      count++;
    }
  }
  res = res + str[k] + count;
  k = j;
}
  console.log(res)
    }
    
 }



if (process.env.USERNAME === "Raju") {
  runProgram(`2
  5
  aabcc
  5
  aazaa`);
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
