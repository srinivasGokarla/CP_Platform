var input = ["Apple", "Windows", "Linux", "Kindle", "Quiz"]
var sum =0;
var length = input.map(function(el,){
    if(el.length % 2 == 1) {
    sum = sum + el.length
        return(el.length)
        
    }
    
})
console.log(sum);