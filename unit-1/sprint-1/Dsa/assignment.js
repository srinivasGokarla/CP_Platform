var item1cost = 80;
var item1quantity = 6;
var totalcostitem1 = item1cost * item1quantity;
var item2cost = 140;
var item2quantity = 3;
var totalcostitem2 = item2cost * item2quantity;
var toatalitemscost = totalcostitem1 + totalcostitem2;
console.log(toatalitemscost);
var tax = 5;
var taxmoney = (toatalitemscost * tax) / 100;
var discount = 8;
var dicountmoney = (toatalitemscost * discount) / 100;
var tip = 50;
var totalpay =(toatalitemscost + taxmoney -dicountmoney +tip);
console.log(totalpay);






