function checkAlpha(arr) {

var letter = "abcdefghijklmnopqrstuvwxyz";
var count = 0;
for(var i = 0; i< arr.length; i++) {
    for(var j = 0; j < letter.length; j++) {
        if(arr[i] == letter[j]) {
count++
        }
    }
}
return count
}

function checkNum(arr) {
    var num = "1234567890"
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < num.length; j++) {
            if(arr[i] == num[j]) {
    count++
            }
        }
        }
        return count
}


function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var size = Number(input[line]);
        line++;
        var arr = input[line].trim().split("")
        line++
     var alphaCount = (checkAlpha(arr))
     var numCount = (checkNum(arr))


        if(alphaCount > 0 && numCount > 0) {
            console.log("alphanumeric")
        } else if(alphaCount > 0) {
            console.log('chars')
        } else {
            console.log("numbers")
        }
    }  
}

if (process.env.USERNAME === 'Raju') {
  runProgram(`3
  5
  ab2cd
  5
  acfgh
  3
  123`);
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
