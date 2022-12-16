function sumdigit(a){
    var d = 0, s = 0;
    for(var i = 0; i <a.length; i++)
    {
    
    while (a [i] > 0)
    {
        d = a[i] % 10
        s = s + d;
        a[i] = Math.floor(a[i]/10);
    }
    
    }
    console.log(s)
    }
    function runProgram(input) {
     var input=input.trim().split("\n")
     var testcase=Number(input[0])
     var line = 1;
     for(var i = 0; i < testcase; i++)
     {
         var size = Number(input[line++])
         var arr = input[line++].trim().split(" ").map(Number)
        sumdigit(arr)
     }
     
      }
      if (process.env.USERNAME === "Raju") {
        runProgram(`2
        5
        12 14 16 17 29
        6
        1 2 3 4 5 51`);
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