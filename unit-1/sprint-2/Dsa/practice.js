var a = 6;
var b = 5;
if ( a < b) {
console.log ("A is smaller");
} else if ( b < a) {
    console.log( " B is smaller");
}

var password1 = "Srinu"
var password2 = "Great"
if (password1 != password2) {
    console.log("Wrong password");
}


var birth_year = 2000;
var age = 2021 -birth_year;
if(age >=20 && age <=29) {
    console.log("Twenties");
}


var c = 4;
var d = 5;
c > d ? console.log("c") : console.log("d");


var day = "Thursday";
switch (day) {
    case "Monday":
        console.log("mon");
        break;
        case "Tuesday":
            console.log("Tue");
            break;
            case "Wednesday":
                console.log("Wed");
                break;
                case "Thursday":
                    console.log("Thur");
                 break;
                 case "Friday":
                     console.log("Fri");
                break;
                case "Saturday":
                     console.log("Sat");
    default:
        break;
}
 
var number = 5;
if(number%2 ==1) {
    console.log("odd number")
} 
var age_a = 25;
var age_b = 22;
var age_c = 27;

if (age_a > age_b && age_a > age_c){
    if (age_b > age_c) {
        console.log("a b c");
} else {
    console.log("a c b");
}
} else if (age_b > age_c && age_b > age_a) {
    if (age_a > age_c) {
        console.log("b a c");
    } else {
        console.log("b c a");
    }
} else {
    if (age_a > age_b) {
        console.log("c a b");
    } else {
        console.log("c b a");
    }
}
