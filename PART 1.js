// sum of two integer
let a = 10;
let b = 20;
console.log(a+b);

// sum of integer + string
let one = 12;
let two = "13";
console.log(one+two);

//sum of sum + message
let msg1 = 12;
let msg2 = 13;
console.log("sum of"+msg1+msg2);

//type correction  inteeveiw question process name type correction
console.log("1"+1); //concetinate
console.log("1"-1); //subtract why becuase the - sign only for subtract
console.log("1"*2); //maltiply why becus the * sign only for multiply
console.log("1"/1); //devide why becuse the / sign only work for devide

//accept and print the answer
let age = prompt("what is your age");  //prompt convet any value in string
age = Number(age);
console.log(typeof age);

//type casting
//string to number
//number to string
//char to staring
//any one type to another type convertion that called as th type casting

//swapping two varivable via 3 method
//first method
let a1 = 101;
let b2 = 202;   
let c ;
c = a1; //c = 10 & a = 10
a1 = b2; //a = 20 & b = 20
b2 = c; //b = 10 & c = 10
console.log(a1,b2);

//second method
let met2 = 1000;
let met3 = 2000;
met2 = met2 + met3 ; //now met 2 = 30;
met3 = met2 - met3;  //now met 3 = 10;
met2 = met2 - met3;  //now met 2 = 20;
console.log(met2,met3);

//third method
let mett3 = 500;
let mett4 = 400;
[mett3,mett4] = [mett4,mett3];
console.log(mett3,mett4);

//math method
let b31 = 12;
let b34 = 22;
console.log(Math.floor(b31/b34));

//if want to remove last degits
let lastf =123;
console.log(Math.floor(lastf/10)); //answer is 12

//relational opretoars
// < > <= >= != == ===
console.log(10>5); //ans = trupe

//logical opretors
//&& ||
console.log(10>6 && 5<9); //if both are true get true answer
// ||
console.log(10<6 || 15 <9 || 18>9);//if any one true give the true 

//unary operators
//first
let i = 11;
i = i++ + ++i;
console.log(i);

//second
let a12 = 11, b12 = 22;
let c12 = a12 + b12 + a12++ + b12++ + ++a12 + ++b12;
console.log("a=" + a12);
console.log("b=" + b12);
console.log("c=" + c12);

//third
let i11 = true;
i11 ++ ;
console.log(i11);

//fourth
// let ab1 =10++;
// console.log(ab1); //show error not use with any constant value always use with variable

//fifth
// let i23 = 11;
// let j = --(i23++);//show erroe becuse the i23 becomes the 11 so the --11 so the 11 constant value so the show error


//math function
console.log(Math.round(10.3)); //ans is 10 becuse the round figure
console.log(Math.ceil(10.1));//ans is after the point use give the ceil and top of the value so the give 11
console.log(Math.floor(10.8));//ans is 10 that convert value into low level like floor so 10
console.log(Math.trunc(19.18));//ans is the 19 thr trunc convert after point value remove 
console.log(Math.pow(2,5));//ans is 32 that convert value into power like 2^5
console.log(Math.sqrt(25));//ans is square root of 25 is 5
console.log(Math.cbrt(343));//ans is 7 cube root of vaule 7*7*7=343
console.log(Math.abs(-15));//ans is 15 that abs convert the negeative vaule into positive not positive to negetive
console.log(Math.max(78,54,67,89));//ans is 89 return the max value in parameter
console.log(Math.min(78,54,67,89));//ans is the 54 the min value return
console.log(Math.trunc(Math.random()*9000)+1000);//ans give any random value  bet 0 to 1
let buddy = 34.7898;
console.log(buddy.toFixed(3));//ans is 34.789 get value after point you fixed 2 so get 2 value get like 34.78


//calculate ractangle area of receandgle
let width = 5;
let height = 9;
console.log(width*height);//find area 
console.log(2*(width+height));//find parameter

//area of traingle heron's formula
let f1 = 5;
let k1 = 4;
let u1 = 3;
let s = (f1+k1+u1)/2;
console.log(Math.sqrt(s*(s-f1) * (s-k1) * (s-u1)));

//circumfeces of circle
let r = 12;
console.log(Number((2*Math.PI*r).toFixed(2)));