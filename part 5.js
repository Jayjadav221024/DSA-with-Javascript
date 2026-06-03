//Array in Javascript
//  let arr = [];
//  arr.push(100);
//  arr.push(34);
//  arr.push("ali");
//  arr.push(false);
//  arr.pop(arr);
//  arr.pop(arr);
//  arr[2] = 44;
//  arr[3] = 56;
//  arr[7] = 150;
//  console.log(arr);



// let arr = new Array(5);
// let i=0;
// for(i=0;i<arr.length;i++){
//  arr[i] = Number(prompt());
// }
// console.log(arr);



// let arr = [10,20,40,50];
// let sum = 0
// for(let i = 0 ; i<arr.length ; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);

// let arr = [30,68,89,43,67];
// let max = arr[0];

// for(i=1;i<arr.length;i++){
//     if(max<arr[i]){
//        max = arr[i];
//     }
// }
// console.log(max)


// let arr = [10,30,56,43,29,64,49,60];
// let max = Math.max(arr[0],arr[1]);
// let smax = Math.min(arr[0],arr[1]);

// for(let i = 2 ; i<arr.length;i++){
//     if(arr[i]>max){
//         smax = max;
//         max = arr[i];
//     }else if(arr[i]>smax && max != arr[i]){
//         smax = arr[i];
//     }
// }
// console.log(max,smax)

 
// let arr = [10,30,56,43,29,64,49,60];
// let temp = new Array(arr.length);
// let j = 0;
// for(let i = arr.length-1 ; i>=0 ; i--){
//     temp[j] = arr[i];
//     j++
// }
// console.log(temp)


// let arr = [10,30,56,43,29,64,49];
// let i = 0 ,j = arr.length-1;

// while(i!=j){
//     let temp = arr[i];
//     arr[i] = arr[j]
//     arr[j] =  temp;
//     i++;
//     j--;
// }
// console.log(arr);

let arr = [1,0,1,1,0,1,0,0];
let i = 0;
let j  = 0;

for(i= 0;i<arr.length;i++){
    if(arr[i]===0){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++
    }
}
console.log(arr);