function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0]);
    var line = 1;
    for(i = 0; i < testcases; i++) {
        var [N, K] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        var array = [];
        var count = 0;
   for(j = arr.length - 1; j >= 0; j--){
       array.push(arr[j]);
   }
       for(k = 0; k < array.length; k++){
           for(l = k; l <array.length;l++){
               if( (array[k]-array[l] == K)){
                   count++;
               }
           }
       }
   if(count >= 1){
       console.log("Yes")
   } else {
       console.log("No")
   }
   }
   }
   
   if (process.env.USERNAME === "USER") {
     runProgram(`2
     5 3
     1 2 3 4 5
     5 8
     1 2 3 4 5 `);
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