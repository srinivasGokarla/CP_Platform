function runProgram(input) {
  input = input.trim().split("/n")
  var [N,M] = input[0].trim().split(" ").map(Number)
  var line = 1;
  var arr = [];
  for(var i = 0; i < N; i++) {
arr.push(input[line].trim().split(" ").map(Number))

  }
  evenProductInColumns(N,M,arr)
}

function evenProductInColumns(N,M,arr){
 
    var p1=1
  for(var i=0;i<1;i++){
      for(var j=0;j<M;j++){
           if(arr[j][i]%2==0){
               p1 *=arr[j][i];
           }
      }
   }
   console.log(p1);
    var p = 1
  for(var i=1;i<2;i++){
   for(var j=0;j<M;j++){
        if(arr[j][i]%2==0){
            p *=arr[j][i]
            
        }
   }
}console.log(p);
var p3=1 
for(var i=M-1;i<M;i++){
   for(var j=0;j<M;j++){
        if(arr[j][i]%2==0){
            p3 *=arr[j][i]
            
        }
   }
}
console.log(p3);

 
}

if (process.env.USERNAME === "USER") {
  runProgram(`3 3
  1 2 3
  4 5 6
  7 8 9`);
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
