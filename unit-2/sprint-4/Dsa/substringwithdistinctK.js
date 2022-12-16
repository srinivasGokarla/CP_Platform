function runProgram(input) {
    input = input.trim().split("\n")
    var sub = input[0].trim().split(" ").map(Number)
       var N = sub[0]
    var K = sub[1]

     var str = input[1].trim();
 
    distinctLetter(N, K, str)

}

function distinctLetter(N, K, str) {
    var count = 0;
    var arr = [];

    for (var i = 0; i < K; i++) {
        arr.push(str[i])

   } if (check(arr)) {
        count++;
    }

    for (var i = K; i < N; i++) {
        arr.shift()
        arr.push(str[i])
        if (check(arr)) {
            count++;
        }


    }

    console.log(count)
}

function check(arr) {
    var obj = {}
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        } else {
            return false;
        }
    }
    return true;
}

if (process.env.USERNAME === "USER") {
    runProgram(`4 2
    abcc`);
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