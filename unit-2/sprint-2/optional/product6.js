function runProgram(input) {
var[one, two, three, four, five, six] = input.trim().split(" ")
var product = (one * two * three * four * five * six)
console.log(product)
}


if (process.env.USERNAME === "USER") {
  runProgram(`1 2 3 4 5 6`);
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
