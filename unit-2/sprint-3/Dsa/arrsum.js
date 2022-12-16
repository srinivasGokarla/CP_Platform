var index = [2, 4, 5, 3, 6, 8];
var f_index = index.filter(function(el,index) {
return(index % 2 == 0 && el % 2 == 0)
})
console.log(f_index)
    