function runProgram(input) {
    input = input.trim().split("\n")
  var size = Number(input[0]);
  var arr = input[1].trim().split(" ").map(Number);
  //  console.log(arr)
  var arr1 = []
  for(i = arr.length; i >= 0; i--) {
    arr1.push(arr[i])
  }
   console.log(arr1.join(" ").trim())
     
  }
  
  
  if (process.env.USERNAME === "USER") {
    runProgram(`5
    1 3 2 4 5`);
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
  