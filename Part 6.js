//Left rotaion By 1 Element
// let arr = [1,2,3,4,5];
// let copy = arr[0];

// for(let i = 0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
// }
//  arr[arr.length-1] = copy;
//  console.log(arr);

//right rotaion By 1 Element
// let arr = [1,2,3,4,5];
// let copy = arr[arr.length-1];

// for(let i = arr.length-1;i>0;i--){
//     arr[i] = arr[i-1];
// }
//  arr[0] = copy;
//  console.log(arr);

//left rotation by 2 elemnt
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("enter k value"));
// k =  k%2
// for (let j = 0; j < k; j++) {
//   let copy = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
  
// }
// console.log(arr);

//left rotation by 2 elemnt time complexcity n 
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = Number(prompt("enter k value"));
// k =  k % arr.length;

// for(let i = 0;i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length]
// }
// console.log(temp);


//left rotation by 2 elemnt time complexcity n without spacing
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("enter k value"));
// k=k%arr.length;
// reverse(0,k-1);
// reverse(k,arr.length-1);
// reverse(0,arr.length-1);
// function reverse(i,j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++
//         j--
//     }
// }
// console.log(arr);


//mergeed two sorted array;
let arr1 = [2,5,6];
let arr2 = [1,3,4,8];
let merrg = new Array(arr1.length+arr2.length);
let i = 0;
let j = 0;
let k = 0;

while(i<arr1.length && j< arr2.length){
    if(arr1[i]<arr2[j]){
       merrg[k++] = arr1[i++];
    }else{
     merrg[k++] = arr2[j++];
    }
}
while(j<arr2.length){
    merrg[k++] = arr2[j++]
}
while(i<arr1.length){
    merrg[k++] = arr1[i++]
}
console.log(merrg);