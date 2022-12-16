function runProgram(input) {
input = input.trim().split("\n")
var str = input[0].trim().split("")
//console.log(str);
var smallest = Infinity;
var maximum = 0;
var checkstr = "";
for(var i = 0; i < str.length; i++) {
    var sub = "";
    for(var j = i; j < str.length; j++) {
        sub = sub + str[j];
    
    var countsub = GetDistinctCount(sub);
    if(countsub >= maximum) {
        if(countsub == maximum && smallest > sub.length) {
            smallest = sub.length;
            maximum = countsub;
            checkstr = sub;
        } else if (countsub != maximum) {
            smallest = sub.length;
            maximum = countsub;
            checkstr = sub
        }
    }
   console.log(smallest,maximum,sub)

 function  GetDistinctCount(sub) {
     var count = 0;
     var obj = {};
     for(var k = 0; k < sub.length; k++) {
         if(obj[sub[k]] == undefined) {
             obj[sub[k]] == 1;
             count++;
         }
     }
    return count;
 }
}
}
}
if (process.env.USERNAME === "Raju") {
  runProgram(`zoomsessionmooz`);
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
