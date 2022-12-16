function runProgram(input) {
  input = input.trim().split("\n");
  var str = input[0].trim().split("");
  var obj = {};
  for(i= 0;i <str.length; i++){
  if(obj[str[i]] == undefined) {
    obj[str[i]] = 1;
  } else {
    obj[str[i]] = obj[str[i]] + 1;
  }
  var count = 0;
  } for(key in obj){
    count++;
  } if (count < str.length){
    console.log("No");
  } else{
    console.log("Unique");
  }
}

if (process.env.USERNAME === "Raju") {
  runProgram(`srinivas`);
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
