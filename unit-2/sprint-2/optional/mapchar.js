function runProgram(input) {
var input = input.trim().split("\n")
var N = Number(input[0]);
var k =  Number(input[1]);
var str = input[2].trim().split("")
// console.log(str)
var charMap = {
  a:30,
  b:31,
  c:32,
  d:33,
  e:34,
  f:35,
  g:36,
  h:37,
  i:38,
  j:39,
  k:40,
  l:41,
  m:42,
  n:43,
  o:44,
  p:45,
  q:46,
  r:47,
  s:48,
  t:49,
  u:50,
  v:51,
  w:52,
  x:53,
  y:54,
  z:55
}
var sum = 0;

for(var i = 0; i < str.length; i++) {
 
 
}

console.log(sum)
}



if (process.env.USERNAME === "USER") {
  runProgram(`30
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
