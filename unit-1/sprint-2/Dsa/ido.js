var a = 10;
var b = 12;
if (a < b) {
    console.log("A is Bigger");
} else if (b > a) {
    console.log("B is Bigger");
}

var password1 = "clear"
var password2 = "clever"
if (password1 != password2){
    console.log("Wrong password");
} else if (password1 = password2) {
    console.log("Valid password");
}
var number = 4;
if (number%2 != 1) {
    console.log('Even number');
} else if (number%2 ==1) {
    console.log("Odd number");
}
var birth_year = 2005;
var age = 2021-birth_year;
if(age >=13 && age <=19) {
    console.log("Teenage");
}
 var birth_year = 1995;
 var age = 2021-birth_year;
 if (age >= 20 && age <= 29) {
     console.log("Twenties");
 }
 var age_a = 25;
 var age_b = 20;
 var age_c = 32;
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
var age_a = 25;
var age_b = 22;
var age_c = 27;

if (age_a < age_b && age_a < age_c){
    if (age_b < age_c) {
        console.log("a b c");
} else {
    console.log("a c b");
}
} else if (age_b < age_c && age_b < age_a) {
    if (age_a < age_c) {
        console.log("b a c");
    } else {
        console.log("b c a");
    }
} else {
    if (age_a < age_b) {
        console.log("c a b");
    } else {
        console.log("c b a");
    }
}
var x = 12;
var y = 15;
x = y ? console.log("Equal") : console.log("different");

var month = "Apr";
switch (month) {
    case "Janu":
        console.log("Jan");
        break;
        case "Feb":
            console.log("Feb");
            break;
            case "Mar":
                console.log("Mar")
                break;
                case "Apr":
                    console.log("Apr");
                    break;
                    case "May":
                        console.log("May");
                        break;
                        case "Jun":
                            console.log("Jun");
                            break;
                            case "July":
                                console.log("July");
                                break;
                                case "Aug":
                                    console.log("Aug");
                                    break;
                                    case "Sep":
                                        console.log("Sep");
                                        break;
                                        case "Oct":
                                            console.log("Oct");
                                            break;
                                            case "Nov":
                                                console.log("Nov");
                                                break;
                                                case "Dec":
                                                    console.log("Dec");
                                                    break
 default:
        break;
}





