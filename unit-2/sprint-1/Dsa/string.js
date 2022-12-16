function runProgram(input) {
    var arr = input.trim().split("");
   

function toNumber(char) {
    var letter = "abcdefghijklmnopqrstuvwxyz";
    var number = "1234567891011121314151617181920212223242526";
    for (i = 0; i < letter.length; i++){
     if(letter[i] == char) {
         return number[i]
     }
         
        }
         return char;
    }
  
}
  if (process.env.USERNAME === "Raju") {
    runProgram(`aba`);
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