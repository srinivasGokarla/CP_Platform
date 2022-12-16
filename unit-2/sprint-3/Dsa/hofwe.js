var numbers = [1,2,3,4,5,6,7];
numbers.forEach(function(el){
    console.log("square of " + el + "is" + el*el);
});

function double(el){
    return el * 2;

}

var doublenumbers = numbers.map(double);
console.log(doublenumbers);

var isEven = function(el){
    return el%2 ==0;
}

var evennumbers = numbers.filter(isEven);
console.log(evennumbers);

var product = function(ac,el){
    return ac * el;
}

var numproduct = numbers.reduce(product);
console.log(numproduct);

var sum = function(ac , el){
    return ac +el;
}
var eveNumsum = numbers.filter(isEven).reduce(sum);
console.log(eveNumsum);

var multiple3 = function(el) {
    return el% 3 ==0;
}
var cube = function(el){
    return el ** 3;
}
var m3cubesum = numbers.filter(multiple3).map(cube).reduce(sum);
console.log(m3cubesum)