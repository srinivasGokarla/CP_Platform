function runProgram(input) {
input = input.trim().split("\n")
var size = number(input[0])
var str = input[1].trim().split("").map(Number)

for(var i = 0;i < str.length;i++) {
    for(var j = i; j < str.length; j++) {
        var s = ""
        for(var k = i; k<=j; k++) {
         s = s + arr[k]
        }
var count = 0;
if(str.lenght == 1) {
    count++
}
         if(a[0] =a[a.length-1] )

        }
    }
}


}

if (process.env.USERNAME === "Raju") {
  runProgram(`7
  1000100`);
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
