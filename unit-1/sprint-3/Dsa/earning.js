function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = Number(input[0]);
    var line = 1;
    for(var i = 0; i < testCases; i++) {
        var [buildings,amt] = input[line].trim().split(" ").map(Number)
        line++;
        var height = input[line].trim().split(" ").map(Number)
        line++;
        console.log(buildings,amt,height);
        var count = 1;
        var minHeight = height[0]
        for(var j = 1; j < height.length; j++) {
            if(height[j] > minHeight) {
                minHeight = height[j]
                count++
            }
        }
        console.log(count*amt);
    }

}

if (process.env.USERNAME === "Raju") {
  runProgram(`2
  6 3
  8 2 3 11 11 10
  5 12
  12 20 39 45 89`);
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