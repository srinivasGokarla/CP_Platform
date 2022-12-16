var input = "A quick BROWN fox Jumps oveR a LazY DOg"

function stringToLower (input) {
    var output = "";
    for(var i = 0; i < input.length; i++) {
        var lc = characterToLower(input[i]);
        output = output + lc;
    }
    return output;
}

function characterToLower(input) {
    var lc = "abcdefghijklmnopqrstuvwxyz"
    var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i = 0; i < uc.length; i++) {
        if(input == uc[i]) {
            return lc[i];
        }
}
         return input;
}

function getWords(input) {
    var words = [];
    var word = "";
    for(var i = 0; i < input.length; i++) {
        if(input[i] != " ") {
            word = word + input[i];
        } else {
            if(word.length > 0) {
                words.push(word);
                word = " ";
            }
        }
}
if(word.length > 0) {
    words.push(word);
}
return words;
}

function joinWords(input,join_char) {
    var output = "";
    for(var i = 0; i < input.length; i++) {
        output = output + input[i];
        if(i != input.length - 1) {
            output = output + join_char;

        }
}
return output;
}

function WordsFirstUpperNotFirst(input) {
    var output = [];
    for(var i = 0; i < input.length; i++) {
        if(i == 0) {
            output.push(input[i]);
        } else {
            var upperWord = firstUpper(input[i]);
            output.push(upperWord);
        }
} 
return output;
}

function firstUpper(input) {
    var output = "";
    for(var i = 0; i < input.length; i++) {
        if(i == 0) {
            var uc = getUpperCase(input[i]);
            output = output + uc;
}   else {
    output = output + input[i];
}
    }
    return output;
}

function getUpperCase(input) {
    var lc = "abcdefghijklmnopqrstuvwxyz"
    var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i = 0; i < lc.length; i++) {
        if(input == lc[i]) {
            return uc[i];
        }
}
       return input;
}

function snakeCase() {
    var step1 = stringToLower(input);
    var step2 = getWords(step1);
    var step3 = joinWords(step2,"_");
    console.log(step3);
}

function kebabCase() {
    var step1 = stringToLower(input);
    var step2 = getWords(step1);
    var step3 = joinWords(step2,"-");
    console.log(step3);
}

function camelCase() {
    var step1 = stringToLower(input);
    var step2 = getWords(step1);
    var step3 = WordsFirstUpperNotFirst(step2);
    var step4 = joinWords(step3,"");
    console.log(step4);
}

  snakeCase();
  kebabCase();
  camelCase();