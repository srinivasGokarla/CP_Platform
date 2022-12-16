function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for (var i = 1; i <= test; i++) {
        var size = input[line++].trim().split(" ").map(Number)

        var arr = input[line++].trim().split(" ").map(Number)
        
        console.log(size, arr)
    }


  //  commonIndexofArray()
}
/*
function commonIndexofArray() {
    var first = 0;
    var second = 0;
    var ans = [];
    while (first < arr1.length && second < arr2.length) {
        if (arr1[first] == arr2[second]) {
            ans.push(arr1[first]);
            first++;
            second++;
        } else if (arr1[first] > arr2[second]) {
            second++;
        } else {
            first++;
        }
    }
    console.log(ans)
} */
if (process.env.USERNAME === "USER") {
    runProgram(`2
    6
    1 2 3 4 5 6
    3
    3 3 5
    4 
    1 2 3 4
    4 
    5 6 7 8`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}