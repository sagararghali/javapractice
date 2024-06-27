// //loop
// // for each
// let num =[1,2,3,4,5,6]
// num.forEach(function(num){
// console.log(num);
// })

// //array from
// let arr="sagar";
// let x=Array.from(arr);
// console.log(x);

// //for of
// for(let i of arr){
//   console.log(i);
// }

// //for in
// for(let i in arr){
//   console.log(i); //it display key/address if element
// }
 
//map method
// let a =[10,20,30,40,50]
// a.map((value,index,array)=>{
// console.log(value,index,array);
// })

// // filter method
// let b=[11,22,33,44,55]
// let c=b.filter((element)=>{
// return element<30;
// })
// console.log(c);

// // reduce method
// let d=[12,23,34,45,56]
// let e=d.reduce((e1,e2)=>{
// return e1+e2;
// })
// console.log(e);

//create an array of numbers and take input from the user to add numbers to the array
// let x=prompt("enter element of an array");//this was my logic
// console.log(x); 
// let sap=Array.from(x)
// console.log(sap);
//  let y=sap.push(10,20,30);
//  console.log(sap);

//keep adding numbers to the array if user enters 0 terminate the program
// let b=prompt("enter elements"); //not supported in vs code to enter elements 
// console.log(b);
// do{
// let c=Array.from(b)
// let a=[1,2,3]
// a.push(c)
// }while(b!=0);

//elements are divisiable by 10
let arr=[10,33,50,34,75,400];
let x=arr.filter((a)=>{
return a%10==0;
})
console.log(x);

//square of elements in array
let b=arr.map((a)=>{
  return a*a;
})
console.log(b);

// factroial of array
let c=arr.reduce((h1,h2)=>{
return h1*h2;
})
console.log(c);




