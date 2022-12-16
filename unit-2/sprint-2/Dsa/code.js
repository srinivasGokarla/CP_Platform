function runProgram(input) {
input = input.trim().split("/n")
var name = input[0]
var gender = input[1]
if(geneder == M) {
    console.log("Hello mr." + " " + name)
} else {
  console.log("Hello mrs." + " " + name)
}

}

if (process.env.USERNAME === "Raju") {
  runProgram(`Prateek M`);
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

