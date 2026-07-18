


//                            chapter 1
// 01  basics of js variables 


// let d = 10 ;   // this can be reassigned anywhere 
// var b = 10;   // in modern time we will not use it 
// const c = 10 ; // it cant be reassinged again and again 

// console.log(typeof(null));


// let a = [1,2,3,4];
// console.log(typeof(a));  // this will return object 
// console.log(typeof(NaN));  // this will return number 


let a = [1,2,3,4];
console.log(typeof(a));

// 02 type of loops

for(let i=0 ;i<a.length ;i++) //01  most basic for loop
{
    console.log(a[i]);
}

 a.forEach(item => console.log(item));  // 02 mostly used with array , aap isme function bhi dal skte ho 

for(item of a)   // 03 for-of loop is also used wit array 
{
    console.log(item);
}


// 03 array and its method 

let arr  =  ["arpit" , "bitto"];

arr.push("aaditya");  // insert at end 
// arr.pop();            // pop from end 

arr.unshift("aaditya"); // add from front 
arr.shift(); // remove from front 
arr.push(1,2,3);

// a} searching in arrays

console.log(arr);

console.log(arr.indexOf(5)); // element is on which index (1,-1)

console.log(arr.includes(2)); // elemnt hai ya nhi  ( true or false )

console.log(arr.indexOf(2,1)); // same as index of only start with given index 

// b)  emptying in array 
console.log(arr.slice(1,3)) // it will include 1,2  but still slice se orignal array manipulate nhi hua hai 

// console.log(arr.splice(2,2))  // splice orignal array ko manipulate krdeta hai 


let arr2 = [4,5,6];
 
//let arr3 = arr + arr2;   // dont do this mistake to add two   arrays because this will result you in String 
console.log(typeof(arr3));

let arr4 = arr2.concat(arr)  // 01 concat ka use krskte hai 

let arr5 = [... arr2,...arr]; // 02 spread  operator 
console.log(arr5);

let message = 'this is my home'; // 03 join and split

// let parts = message.join('-'); // check this 
// console.log(parts);
 //let parts = message.split(" "); // it will return as array 
// console.log(typeof(parts));  


// sort and reverse 
let arr6 = [1,2,4,3];
console.log(arr6.sort()); // this both will make changes in main array
console.log(arr6.reverse());
console.log(arr6);

// filter and map
let odd = arr6.filter((value)=>{
    return value%2==0;
})
console.log(odd);

let add = arr6.map((value) => {
    return value+2;
})
console.log(add);







// .........................................................//


//                             04  Object 

const student = {
    "name":"arpit",
    age:23
}

// 01 accesing the object keys 
console.log(student["name"]); // ye use krne se hum thode fayde milte hai 
console.log(student.name); //  


// 02 loop for object for-in loop
for(let key in student)
{
    console.log(key,student[key]);
}

// 03 cloning of objet 

// let destination = {... student };  // rest operator 
// console.log(destination);

let destination = Object.assign({},student);  // object . assign 
console.log(destination);

const {name,age} = student ;  //destructuring 


// .......................05 function ...................................//

function one (a,b,...c)
{
    return c;  // yha pr ye c extra argumrnts ko array me return krdeta hai 
}

console.log(one (2,3,4,5,6));

// prmitive data type (string , let , ..) jo call by value hota hai
// non-primitive (arrray , objetc ) joh call by refrence hota hai always 










// let b = "arpit";
// console.log(Number(b)); // how to convert string into nummber 

// arrow functions 

let some = ()=>() // in this type of syntax you dont have to return anything as you are using normal brackets 

let some = ()=>{ return } // in this curly braces you have to use return keyword for it 

// hoisting
let some = ()=>{ return } // IN THIS type if expression hoisting in not possible 

function xyz (x) // here hoising is possible 
{
    return x;
}

// scope = scope sirf class and functions ka hi hota hai , object scope nhi hota hai 
 /*
 obje{
             // ye bracket scope define nhi krta hai 
}

function x ()
{
              // ye scope hai 
}

// IIFE (Imideatly INvoke functions )
these functions will automatically run one time only then it will be cleared from memory 

(function xyz ()
{
    
})();  // (entire defination of functon )()  ye syantax hai due to this yeh scope pollution se bcha leta hai and khud call hojata hai ek bar 


//...........................................................//
//                           06 DOM 01

/* 
DOM Manipulation = html ko hum javascript object me bdl dete hai 

two options 
 opt 1 = getElementByID , opt 2 = queryselector 
 
 queryselectors are preffered over getelemnt by id because we will get freedom of using loop on html list and also it will give is snapshot of current situation , and getelement method will get updatted on live things 
 
 */
 
 document.createElement('h1');
 
 /*
 there are multiple methods in this appendchid, hasclassname and all read frOM w3 
 
 WE CAN CHANGE THE CSS BY STYLE KEWWORD HERE 
 */
 //..........................................................//
 
 // 07  EVENTS IN JS
 // many events like clcik, dblclick and others 
 
/*  element.addeventlistener("event", hanleclick(e)=>{
     e.target.style.backgrond = ""
  })
  
  now there are three phase 
  1 bubbling 
  2 at targt
  3 capture 
  
  by default yeh bubblinn phase me hote hai & third parameter false hota hai 
  but if we make it true then wo capture phase me kaam krt hai 
  
*/

//...........................................................//

// 07 PROMISE  ( it has three things resolve, reject  ,finally )
/*

fetch("url")
.then({ return })  // yeh fullfill hoga tb kuch return krta hai 
.then( {ye upr wale result ko leta hai })

.catch({ this will handle the error })

no need of sync and await 

*/

// 08 ASYNC AND AWAIT 

/*
async function  () => {
 const response = await fetch("url"); pehle ye line execute hogi 
const data = await response.json() phir ye wali hogi 
return (data);
}
 
*/


// Event loop , yotube se dekhna for revison 
// callback hell delkhna gpt se 

// you completed above avg javascript 


 
 
 








