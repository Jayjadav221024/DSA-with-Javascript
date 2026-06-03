// let s = "  jay  ";
// s+= "jadav";
// console.log(s.length); /lenth of string
// console.log(s.slice(1,5)); slice 1 to 5 ans = ayja
// console.log(s.substring(2,6)); same 
// console.log(s.toUpperCase()); uppercase
//  console.log(s.toLowerCase());
// console.log(s.concat("CEO","HHHH"));CONCAT;
// console.log(s.trim());
// console.log(s.charAt(2));
// console.log(s.charCodeAt(2));

// for(let i =0 ; i<s.length ;i++){
//     console.log(s[i]);
// }

// let s = prompt('enter');
// let rev = "";
// for(let i=s.length-1;i>=0;i--){
//     rev = rev + s.charAt(i);
// }
// if(rev==s){
//     console.log("palindrom")
// }else{
//     console.log("nots")
// }


let s = prompt('');
let ispali = true;
let i = 0;
let j = s.length-1;
while(i<j){
    if(s.charAt(i) != s.charAt(j)){
       ispali = false;
      break
    }
    i++;
    j--
}
if(ispali) console.log("palidrone");
else console.log("not palindrone");