function runProgram(input) {
input = input.trim().split("/n")
var str = input[1].trim().split("").map(Number)
var arr = [];
for(var i = 0; i < str.length; i++) {
    for(var j = 0; j < str.length; j++) {
        if(i<j) {
            var n = j - i;
            var x = str[j] - str[i]
            var count = 0;
            for(k = 1; k <= n; k++) {
                if(n % k == 0) {
                    count++;
                }
            }
            if(count == 2) {
                arr.push(x)
            }
        }
    }
    console.log(arr);
    var sum = 0;
    for(var l = 0; l < arr.length; l++) {
        sum = sum + arr[l];

    }
    console.log(sum);
}
}

if (process.env.USERNAME === "Raju") {
  runProgram(`6
  1 2 3 5 7 12`);
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
