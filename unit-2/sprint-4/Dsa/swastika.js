function runProgram(input) {
input = input.trim().split("\n")
console.log(input)
var [m,n] =input[0].trim().split(" ").map(Number)
console.log(m,n)
var line = 1;
for(var i = 0; i < m; i++){
    var arr = input[line++].trim().split(" ").map(Number)
    console.log(arr)
}

 var sum = 0;
    for (i = 0;i <= Math.floor(n/2); i++){
        sum = sum + arr[i][0];
    }
    for (i = 1;i < m; i++){
        sum = sum + arr[n/2][i];
    }
    for ( i = Math.floor(n/2) + 1; i < n; i++)
     sum =  sum + arr[i][m-1];
     console.log(sum)
}



if (process.env.USERNAME === "Raju") {
  runProgram(`3 5
  1 2 3 4 5
  6 7 8 9 10
  11 12 13 14 15
  `);
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
