function runProgram(input) {
   input = input.trim().split("\n")
   var line = input[0].trim().split(" ").map(Number)
   var size = line[0]
   var K = line[1]
   var arr = input[1].trim().split(" ").map(Number)
  // console.log(input,line,size,K,arr)
  for(var i = 0; i < arr.length; i++) {
      var sub = [];
      for(var j = i; j < arr.length; j++){
          sub.push(arr[j])
         console.log(sub)
            if(sub[l].length == size-1) {
                console.log(sub)
            
        }
      }
      
  }
  }
  
  
  if (process.env.USERNAME === "USER") {
    runProgram(`4 3
    2 3 4 6`);
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
  