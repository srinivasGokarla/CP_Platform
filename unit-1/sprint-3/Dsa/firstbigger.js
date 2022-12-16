function greater(arr,n) {
  var newarr = [];
  for(var i = 0; i < arr.length; i++){
    if(n < arr[i]) {
      newarr.push(arr[i]);
    }
  }
  if(newarr[0] > n){
    return newarr;
  }
}
 function small(ans) {
   var min = ans[0];
   for(var i = 0; i < ans.length; i++) {
     if(min > ans[i]) {
       min = ans[i];
     }
   }
   return min;
 }
function runProgram(input) {
    input = input.split("\n");
    var arr = input[1].trim().split(" ").map(Number);
    var testcases = input[2];
    var line = 3;
    for(var i = 0; i < testcases; i++) {
      var N = Number(input[line]);
      line++;
      var ans = greater(arr,N);
      if(ans == null) {
        console.log(-1);
      } else {
        var min = small(ans);
        console.log(min);
      }
    }
}
if (process.env.USERNAME === 'Raju') {
  runProgram(`10
  13 89 81 66 81 63 71 76 73 81
  2
  65
  15
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