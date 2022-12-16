var input =  ["Apple", "Windows", "UBUNTU"];
var output = input.map(function(el,i){
    return el.toLowerCase()
})

console.log(output.join("-"));