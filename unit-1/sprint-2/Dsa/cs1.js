var year = 2021;

for(var i = 1; i <= 12; i++) {
  var days = 31;
  if(i == 1|| i == 3|| i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
    days = 30;
  } if (i == 2) {
    if (year % 4 == 0) {
      days = 29;
    } else {
      days = 28;
    }
  }
  for (var j = 1; j <= days; j++) {
    var month = i;
    if(month < 10){
      month = "0" + i;
    }
    console.log(year + "-" + month + " - " +j);
  }
}