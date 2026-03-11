//VIDEO 2 (PART 2) DSA with javascript

//question 1 Valid Voter
let ans = Number (prompt("what is your age"));
if(isNaN(ans)===true){
    console.log("wrong voter")
}else if(ans>=18){
    console.log("you can vote")
}else{
    console.log("you cannot vote")
};

//question 2 Shop Discount
let amount = Number (prompt("what is your amount"));
if(amount>0 && amount<=5000){
    console.log(amount)
}else if (amount>=5001 && amount <= 7000){
    console.log(amount-Math.floor((5*amount)/100));
}else if(amount>=7001 && amount<=9000){
    console.log(amount-Math.floor((10*amount)/100));
}else if(amount>9000){
    console.log(amount-Math.floor((20*amount)/100));
}else{
    console.log("wrong amount");
}

//second effcient way
let amount1 = Number (prompt("what is your amount"));
let discount = 0;
if(amount1>0 && amount1<=5000){
    discount = 0;
}else if (amount1>=5001 && amount1 <= 7000){
   discount = 5;
}else if(amount1>=7001 && amount1<=9000){
    discount =10;
}else if(amount1>9000){
    discount = 20;
}else{
    console.log("wrong amount");
}
console.log(amount1-Math.floor((discount*amount1)/100));


//question 3 Bijli Bill
//solving by me 
let billvalue = Number (prompt("what is your unit"));
if(billvalue>0 && billvalue<=100){
    console.log(billvalue*4);
}else if(billvalue>=101 && billvalue<=200){
    console.log(((billvalue-100)*6)+(100*4));
}else if(billvalue>=201 && billvalue <=400){
    console.log(((billvalue-200)*8)+(100*4)+(100*6));
}else if (billvalue>400){
    console.log(((billvalue-400)*13)+(100*4)+(100*6)+(200*8));
}

//solve by sir video
let unit = (prompt("what is your unit"));
let unitmt = 0;
if(unit>400){
   unitmt = (unit-400)*13;
   unit = 400;
}
if(unit>200 && unit<=400){
  unitmt += (unit-200) * 8;
  unit = 200;
}
if(unit>100 && unit <=200){
    unitmt+= (unit-100) * 6;
    unit = 100;
}
unitmt += unit*4;
console.log(unitmt);

// QUESTION 4 INR DOMINATION 
let money = 5001;

if(money>500){
    console.log("500 ke :"+Math.floor(money/500));
    money = money%500;
}
if(money>200){
    console.log("200 ke :"+Math.floor(money/200));
    money = money%200;
}
if(money>100){
    console.log("100 ke :"+Math.floor(money/100));
    money = money%100;
}
if(money>50){
    console.log("50 ke :"+Math.floor(money/50));
    money = money%50;
}
if(money>20){
    console.log("20 ke :"+Math.floor(money/20));
    money = money%20;
}
if(money>10){
    console.log("10 ke :"+Math.floor(money/10));
    money = money%10;
}
if(money>5){
    console.log("5 ke :"+Math.floor(money/5));
    money = money%5;
}
if(money>2){
    console.log("2 ke :"+Math.floor(money/2));
    money = money%2;
}
if(money===1){
    console.log("1 ke :"+money);
    money = money%1;
}


//ternary operator
122>13 ? console.log("yes 12 > 13") : console.log("no 12 not > 13");//first way
console.log(122>13?"hello":"not hello"); //second way;

//nested ternary operator
let num = 10;
console.log(num>0?"positive":num<0?"negetive":"zero");

//switch case
let day = 2;
switch (day) {
    case 1:console.log("monday")
    break;//fall through condition called break
    case 2:console.log("tuesday")
    break;
    default:console.log("inavild")
}

//new thing
let daybar = 2;
switch (daybar) {
    case 1:
    case 2:
    case 3:
        console.log("teeno hai");
    break;
    default:console.log("inavild")
}

//new thing
switch (true) {
    case 19<6:
        console.log("hello he")
        break;
    case 10>9:
        console.log("hey")
        break;
    default:
        break;
}

//new one 
let numby =  0.1 + 0.2;
numby = Number (numby.toFixed(1));
switch (numby) {
    case 0.3:
        console.log("0.1 hai")
        break;
    case 0.4:
        console.log("0.4 hai")
        break;
    default:console.log("kuch nhi hai")
        break;
}