// function runProgram(input) {
// input = input.trim().split("\n")
// //console.log(input)
// var testcases = Number(input[0])
// //console.log(testcases)
// var str = input[1].trim().split("")
// //console.log(str)
// var obj = {};
// for(var i = 0; i < str.length;i++){
//     if(str[i] != " "){
//         obj[str[i]] = null;
//     }
// }
// for(key in obj) {
// // key.sort()
//     var count = 0;
//     for(var i = 0; i < str.length; i++) {
//         if(key == str[i]) {
//             count++;
//         }
//     }
//     obj[key] = count;
// }
// obj.sort()
// console.log(obj);
// }

// if (process.env.USERNAME === "Raju") {
//   runProgram(`4
//   mana`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
var fruits = ["banana", "orange", "apple", "mango"];
fruits.sort();