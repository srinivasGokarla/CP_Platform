function runProgram(input) {
    input= input.trim().split("\n")
  var arr = input[0].trim().split(" ").map(Number)
  //console.log(arr)
  var sum = 0;
  
  for(var i = 0; i < (arr.length / 3); i++) {
    sum = sum + arr[i]
  
  }console.log(sum);
  sum = 0;
  
  
  for(var i = 3; i < arr.length-3;i++) {
      sum = sum + arr[i]
      
  }console.log(sum);
  sum = 0;
  
 
  for(var i = 6; i < arr.length;i++) {
    sum = sum + arr[i]
    
}console.log(sum);



}


if (process.env.USERNAME === "USER") {
  runProgram(`1 2 3 4 5 6 7 8 9`);
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
