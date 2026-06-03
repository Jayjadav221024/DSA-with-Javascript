// PATTREN PROGRAMMINg

// process.stdout.write("hello");
// process.stdout.write("world");

//output: *****
let prompt = require("prompt-sync")();
// let a = Number(prompt("enter number"));

// for(let i=1; i<=a ; i++){
//     process.stdout.write("*");
// }

//output: ******
//        ******
//        ******
//        ******
//        ******

//  let a = Number(prompt("enter number"));

// for(i=1;i<=a;i++){
//     for(j=1;j<=a;j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }


//output
// *
// **
// ***
// ****
// let a = Number(prompt("enter number : "));
// for(i=1;i<=a;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }


//output
// 1
// 12
// 123
// 1234
// 12345

// let a = Number(prompt("enter number : "));
// for(i=1;i<=a;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write(j+"");
//     }
//     console.log();
// }


//output
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 

// let a = Number(prompt("enter number : "));
// for(i=1;i<=a;i++){
//     let assci = 65;
//     for(j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(assci)+" ");
//         assci++;  
//     }
//     console.log();
// }


//output
// *****
// ****
// ***
// **
// *
//  let a = Number(prompt("enter number : "));
// for(i=1;i<=a;i++){
//     for(j=a;j>=i;j--){
//         process.stdout.write("*");
//     }
//     console.log(); 
// }

//output
//     *
//    **
//   ***
//  ****
// *****

// let a = Number(prompt("enter number : "));

// for (let i = 1; i <= a; i++) {

//     // spaces
//     for (let n = 1; n <= a - i; n++) {
//         process.stdout.write(" ");
//     }

//     // stars
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*");
//     }

//     console.log();
// }

//output
// *   *
//  * *
//   *
//  * *
// *   *
// let a = Number(prompt("enter number : "));
// for(let i =1; i<=a ; i++){
//     for(let j=1;j<=a;j++){
//         if(j==i || i+j==a+1){
//             process.stdout.write("*");
//         }else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }

//output
// *       *
//  *     *
//   *   * 
//    * *
//     *
// let a = Number(prompt("enter number : "));
// for(let i = 1; i<=a ; i++){
//     for(let j=1;j<=2*a-1;j++){
//         if(j==i || i+j==a*2){
//             process.stdout.write("*");
//         }else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }


//        *
//      *   *
//    *   *   *
//  *   *   *   *
//*   *   *   *   *

let n = Number(prompt("enter number : "));
for (let i = 1; i <= n; i++) {
  let row = "";

  // spaces
  for (let j = 1; j <= n - i; j++) {
    row += "  ";
  }

  // stars with space
  for (let k = 1; k <= i; k++) {
    row += "*";
  }

  console.log(row);
}


