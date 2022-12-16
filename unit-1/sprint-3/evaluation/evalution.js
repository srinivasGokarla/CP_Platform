function runProgram(input) {
    var newInput = input.split(" ");
    var IND_points = Number(newInput[0]);
    var AUS_ponits = Number(newInput[1]);
    var IND_matches = Number(newInput[2]);
    var AUS_matches = Number(newInput[3]);

if(IND_points > AUS_points) {
    console.log("India")

} else if(IND_points < AUS_points) {
    console.log("Australia")
} else if(IND_points == AUS_ponits) {
if(IND_matches > AUS_matches ) {
    console.log("Australia")
}
else if {
    console.log("India")
}  else if {
    console.log("Play another game!")
}
}

}

if (process.env.USERNAME === "Raju") {
  runProgram(`580
  500
  12 
  10`);
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