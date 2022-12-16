function runProgram(input){
    var a = Number[0]; var b = Number[1];
    var c = (a * b);
    if(c > 50) {
        console.log("Enough")
    } else {
        console.log("Go On")
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});