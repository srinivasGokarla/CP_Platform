var input  = ["apple", "windows", "ubuntu", "cola", "system"];

var output = input.filter(function(el){
    return(el[0]=== 'a' || el[el.length -1] === 'a')
})

console.log(output);