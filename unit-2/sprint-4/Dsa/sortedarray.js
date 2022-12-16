function runProgram(input) {
 input = input.trim().split("\n") 
 var N = Number(input[0])
 var arr = input[1].trim().split(" ").map(Number)
   selcetion_sort(N, arr)
}
function selcetion_sort(N, arr) {
 
    for(var i = 0; i < N-1; i++){
        var min = i
        for(var j = i + 1; j < N;j++){
            if(arr[min] > arr[j]){
                min = j
            }
           }
        [arr[min] ,arr[i]] =[arr[i],arr[min]]
    }
    console.log(arr.join(" "))
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
