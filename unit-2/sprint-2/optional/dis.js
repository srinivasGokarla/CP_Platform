function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var testcases = Number(input[0]);
//console.log(testcases)
var line = 1;
for(var i = 0; i < testcases; i++) {
  var size = Number(input[line++]);
  var str = input[line++].trim().split("")
  //console.log(size, str)
  var arr = [];

  for(var j = 0; j < str.length; j++) {
    subst = "";
    for(var k = j; k <str.length; k++) {
      subst += str[k];
      arr.push(subst)
     
        }
      }
     var obj = {};
     for(var l = 0; l < arr.length; l++) {
       if(obj[arr[l]] == undefined) {
         obj[arr[l]] = 1;
       } else {
         obj[arr[l]] += 1;
       }
       var count = 0;
     } for(key in obj) {
       count++;
     }
     console.log(count);
    }
  
}

if (process.env.USERNAME === "Raju") {
  runProgram(`2
  5
  abcde
  3
  aaa`);
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
