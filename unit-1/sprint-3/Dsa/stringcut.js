
function runProgram(input) {
    var input = input.trim().split(" ");
    var mid = Math.floor(input.length/2);
    //console.log(mid);
    var res = [];
    
    for(var i = mid-1; i>= 0; i--) {
     res.push(input[i])
     console.log(res);
    } if(input.length % 2 == 0) {
        for(var i = input.length-1; i>= mid;i--)
        res.push(input[i])
        console.log(res);
    } else {
        for(var i = mid-1; i>= 0; i--) {
            res.push(input[i])
            console.log(res);
        }
        res.push(input[mid]);
        for(var i = input.length-1; i > mid; i--) {
            res.push(input[i])
            console.log(res);
            console.log(res.join(""))
        }
    }
}

if (process.env.USERNAME === "Raju") {
  runProgram(`abcxyz`);
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

