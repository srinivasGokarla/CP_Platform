//var array = [1, 2 , 3, 4, 5, 6, 7, 9, 10];
//missing = [];
//for(i = 1; i <= 10; i++) {
    //if(array.indexOf(i) === -1) {
      //  missing.push(i)
    //}
   // }
    //console.log(missing);
    function getHighest(numbers) {
        var N = Number(input);
        var highest =getHighest(nums);
        var high = number[0];
        for(i = 1; i < number.length; i++) {
            if(number[i] > high) {
                high = numbers[i];
            }
        }
        console.log(highest);
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