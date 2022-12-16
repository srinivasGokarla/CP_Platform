function runProgram(input) {
input = input.trim().split("\n")


function traverse(layer,rows,columns){
    
var arr = [];
    var layer = 2
var rows = 2
var columns = 2
for(var i = 0; i < layer;i++){
    console.log(arr[i])
    for(var j = 0; j< rows; j++){
        for(var k = 0; k< columns;k++){
            console.log(arr[i][j][k])
        }
    }
}
}
}


if (process.env.USERNAME === "Raju") {
  runProgram(`2 2 2
  1 2 3 4 5 6 7 8`);
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