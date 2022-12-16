function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[1])
var day = input[0]
dayOfTheWeek(day, N)
}

function dayOfTheWeek(day, N) {
    var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  
      var rem = N % 7;
    for(var i=0;i<days.length;i++){
      if(days[i] == day){
         var ans = i + rem;
                 if(ans < 7){
                      console.log(days[ans]);
                 } else { 
                     console.log(days[ans-7]);
                 }
      }
    }
  }
if (process.env.USERNAME === "USER") {
  runProgram(`Wednesday
  8`);
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
