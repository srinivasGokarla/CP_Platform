function readtime(t)
{
var hr = Math.floor(t/60);
var min = t % 60;
if(hr == 1)
{
    console.log(hr + "hr" +" " + min + "mins")
}else{
    console.log(hr +"hrs"+" "+ min + "mins")
}
}

function runProgram(input) {
    var input=input.trim().split()
    var no=Number(input[0])
    readtime(no)
  }
  if (process.env.USERNAME === "Raju") {
    runProgram(`135`);
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