function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1;
for(var i = 0; i < testcases; i++){
    var size = Number(input[line++])
    var arr = input[line++].trim().split(" ").map(Number)

   // console.log(input)
   //console.log(testcases)
 //  console.log(size)
  // console.log(arr)
var sum = 0; 
var arr1 = [];
for(var j = 0; j < arr.length; j++) {
    sum = sum + arr[j];
    arr1.push(sum)
   //console.log(sum)
   
}
console.log(arr1.join(" "))
}

}
if (process.env.USERNAME === "Raju") {
  runProgram(`7
  7
  4 2 4 8 3 2 4
  3
  8 3 4
  1
  5
  7
  5 6 2 2 1 9 2
  3
  8 9 8
  1
  4
  3
  8 5 1`);
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
