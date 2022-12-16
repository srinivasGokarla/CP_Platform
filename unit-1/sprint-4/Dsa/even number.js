function runProgram(input){
   
    var s = input;
    var ans = 1;
    temp = 1;
 
    for(var i = 1; i< s.length   ;i++) {
       if(s[i] == s[i-1]) {
          temp++;
 
       }
     else {
       ans = Math.max(ans,temp);
       temp = 1;
    }
 }
 ans = Math.max(ans,temp);
 console.log(ans);
 }
 
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
    read += input;
 });
 process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
 });
 
 process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
 });
 
 