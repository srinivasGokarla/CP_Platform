function runProgram(input) {
    input = input.trim().split("\n") 
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
    sorting(arr)
   }
   function sorting(arr){
    for(var i = 0; i <arr.length - 1; i++){
        let flag = false;
        for(var j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                array[j+1] = temp;
                flag = true;
            }
        }
        if(flag == false){
            console.log(flag);
            break;
        }
    }
    console.log("Sorted",arr)
}
  
   if (process.env.USERNAME === "USER") {
     runProgram(`5
     3 5 0 9 8`);
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
   