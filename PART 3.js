//loop

//for loop
//for loop syntax is (start;end;change){}
//23 to 54
// for (var i = 23;i<55;i++){
//     console.log(i)
// };

//200 to 100
// for(var i = 200;i>100;i--){
//     console.log(i)
// }

//print 11
// var i =1;
// for(;i<=10;i++){
//   console.log(i)
// }
// console.log(i+"fail")

//interview question code is valid
//ans - code is valid but print infinite time because the i value always 1 so the condition always true so browser hang
// for(var i =1;i<=10;){
//     // console.log(i)
// }

//this code is run becuse the no value and no end so run infinite time
// for(;;){
//     // console.log("hello")
// }

//sum of n natural number
// var pr = prompt("enter number for sum");
// if(pr===null){
//     console.log("cancel");
// }
// else{
// var ans =  Number(pr);
// if(isNaN(ans)){
//     console.log("enter only number")
// }
// else{
//     if(ans>0){
//         var sum = 0
//         for (i=1;i<=ans;i++){
//             sum = sum + i
//         }
//           console.log(sum)
//     }else{
//         console.log("please enter only positive value")
//     }
// }
// }

//sum of n natural and factorial of number
// var pr = prompt("enter number for factorial");
// if(pr===null){
//     console.log("cancel");
// }
// else{
// var ans =  Number(pr);
// if(isNaN(ans)){
//     console.log("enter only number")
// }
// else{
//     if(ans>0){
//         var factor = 1
//         for (i=1;i<=ans;i++){
//             factor = factor * i
//         }
//           console.log(factor)
//     }else{
//         console.log("please enter only positive value")
//     }
// }
// }

//factors of numbers
// var pr = prompt("enter number for factorial");
// if(pr===null){
//     console.log("cancel");
// }
// else{
// var ans =  Number(pr);
// if(isNaN(ans)){
//     console.log("enter only number")
// }
// else{
//     if(ans>0){
//        for (var i=1;i<=ans;i++){
//            if(ans%i === 0){
//             console.log(i)
//            }
//        }
//        console.log(ans)
//     }else{
//         console.log("please enter only positive value")
//     }
// }
// }

//prime number yes or not
// var pr = prompt("enter number for factorial");
// if(pr===null){
//     console.log("cancel");
// }
// else{
// var ans =  Number(pr);
// if(isNaN(ans)){
//     console.log("enter only number")
// }
// else{
//     if(ans>0){
//       let primenum = true;
//       for(i=2;i<=Math.floor(ans/2);i++){
//         if(ans%i === 0){
//             console.log(false)
//         }
//       }
//       console.log(primenum)
//     }else{
//         console.log("please enter only positive value")
//     }
// }
// }

//prime number more optimal way
// var pr = prompt("enter number for factorial");
// if(pr===null){
//     console.log("cancel");
// }
// else{
// var ans =  Number(pr);
// if(isNaN(ans)){
//     console.log("enter only number")
// }
// else{
//     if(ans>0){
//     console.log(isprime(ans))
//     }else{
//         console.log("please enter only positive value")
//     }
// }
// }
// function isprime(ans){
//     if(ans<=1) return false;
//     if(ans==2) return true;
//     if(ans%2===0) return false;
//     for(let i=3;i<=Math.floor(Math.sqrt(ans));i+=2){
//         if(ans%i===0) return false;
//     }
//     return true;
// }

//Break and Countinue
//break = Break loop ko rokta hai
//continue loop ko skip karta hai agle value per

//break example
//after coming 11 then loop close
// for(var i =1 ; i<=23 ; i++){
//     if(i===11){
//         break
//     }else{
//         console.log(i)
//     }
// }

//Countinue example
// at 11 miss the value then continue to 12 to 23
// for(var i =1 ; i<=23 ; i++){
//     if(i===11){
//         continue;
//     }else{
//         console.log(i)
//     }
// }

//While Loop
//while loop syntax
//start;
//while(end){
//code
// change;
// }

//while loop ka use tab karo jab rukna pata hai
// var ans =  prompt("kuch bhi dedo(exit for close)");
// while(ans !== 'exit'){
//     ans =  prompt("kuch bhi dedo(exit for close)");
// }

//sum of digits
// var pr = prompt("enter number for sum of digita");
// if (pr === null) {
//   console.log("cancel");
// } else {
//   var ans = Number(pr);
//   if (isNaN(ans)) {
//     console.log("enter only number");
//   } else {
//     if (ans > 0) {
//       var sum = 0;
//       while (ans > 0) {
//         var rem = ans % 10;
//         sum = sum + rem;
//         ans = Math.floor(ans / 10);
//       }
//       console.log(sum);
//     } else {
//       console.log("please enter only positive value");
//     }
//   }
// }

//reverse the number
// var pr = prompt("enter number for reverse number");
// if (pr === null) {
//   console.log("cancel");
// } else {
//   var ans = Number(pr);
//   if (isNaN(ans)) {
//     console.log("enter only number");
//   } else {
//     if (ans > 0) {
//       var rev = 0;
//       while (ans > 0) {
//        var rem =  ans%10;
//        rev = rev*10 + rem;
//        ans = Math.floor(ans/10);
//       }
//       console.log(rev);
//     } else {
//       console.log("please enter only positive value");
//     }
//   }
// }

// strong number
// var pr = prompt("enter number for strong");
// if (pr === null) {
//   console.log("cancel");
// } else {
//   var ans = Number(pr);
//   if (isNaN(ans)) {
//     console.log("enter only number");
//   } else {
//     if (ans > 0) {
//       var sum = 0;
//       var copy = ans;
//       while (ans > 0) {
//         var rem = ans % 10;
//         var fact = 1;
//         for (var i = 1; i <= rem; i++) {
//           fact = fact * i;
//         }
//         sum = sum + fact;
//         ans = Math.floor(ans / 10);
//       }
//       if (copy === sum) {
//         console.log("strong");
//       } else {
//         console.log("not strong");
//       }
//     } else {
//       console.log("please enter only positive value");
//     }
//   }
// }

//do  while loop
// var i =1 ;
// do{
//     console.log("hello"); //every time run hrllo first then condition check
//     i++;
// }while(i<=10);

//repeat hello
// var pr = prompt("enter number for strong");
// if (pr === null) {
//   console.log("cancel");
// } else {
//   var ans = Number(pr);
//   if (isNaN(ans)) {
//     console.log("enter only number");
//   } else {
//     if (ans > 0) {
//       var sum = 0;
//       var copy = ans;
//       while (ans > 0) {
//         var rem = ans % 10;
//         var fact = 1;
//         for (var i = 1; i <= rem; i++) {
//           fact = fact * i;
//         }
//         sum = sum + fact;
//         ans = Math.floor(ans / 10);
//       }
//       if (copy === sum) {
//         console.log("strong");
//       } else {
//         console.log("not strong");
//       }
//     } else {
//       console.log("please enter only positive value");
//     }
//   }
// }

//repeat hello
// do{
//     var ans =  prompt("kuch bhi dedo(exit for close)");
// }
// while(ans !== 'hello'){
//     ans =  prompt("kuch bhi dedo(exit for close)");
// }

//guess the number
// let random = Math.floor(Math.random() * 100) + 1;
// let atempt = 0;
//   let guess = -1;
//   while (guess === random || atempt !== 5)
//    {
//     guess = Number(prompt("enter number bw 1 to 100"));
//     if (isNaN(guess) || guess < 1 || guess > 100) {
//       console.log("number between 1 to 100 only");
//     }
//     if (guess < random) {
//       console.log("its to low");
     
//     } else if (guess > random) {
//       console.log("its to high");
      
//     } else {
//       console.log("congress 🍰🍾🎉 that number is" + guess);
//     }
//     atempt++;
//     console.log("your chance now over")
//   }
//



//Sasta Calculator
let ask = Number(prompt("1 = Addition, 2 = Subtraction, 3 = Multiply, 4 = Division"));

while (ask >= 1 && ask <= 4) {

    let val1 = Number(prompt("Enter First Value"));
    let val2 = Number(prompt("Enter Second Value"));

    if (ask === 1) {
        console.log(val1 + val2);
    } 
    else if (ask === 2) {
        console.log(val1 - val2);
    } 
    else if (ask === 3) {
        console.log(val1 * val2);
    } 
    else if (ask === 4) {
        if (val2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(val1 / val2);
        }
    }

    // again ask user
    ask = Number(prompt("1 = Addition, 2 = Subtraction, 3 = Multiply, 4 = Division (0 to exit)"));

    if (ask === 0) {
        console.log("Program Ended");
        break;
    }
}

