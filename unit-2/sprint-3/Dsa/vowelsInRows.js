function runProgram(input) {
  input = input.trim().split("\n")
  var[N, M] = input[0].trim().split(" ").map(Number);
  var line = 1;
  for(var i = 0; i < N; i++) {
      var str = input[line].trim()
      line++;
    //  console.log(str)
   
  }
  vowelsInRows(str)
}

function vowelsInRows(str) {
     
      for(var j = 0; j < str.length; j++) {
      
          if(str[j] =='a'|| str[j] == 'e' || str[j] == 'i' || str[j] == 'o' || str[j] == 'u') {
    
              console.log("Yes")
          } else {
              console.log("No")
          }
      }
    }
    


if (process.env.USERNAME === "USER") {
  runProgram(`3 2
  a b
  c d
  u f`);
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
