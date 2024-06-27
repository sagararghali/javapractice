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
let a =[10,20,30,40,50]
a.map((value,index,array)=>{
console.log(value,index,array);
})

// filter method
let b=[11,22,33,44,55]
let c=b.filter((element)=>{
return element<30;
})
console.log(c);

// reduce method
let d=[12,23,34,45,56]
let e=d.reduce((e1,e2)=>{
return e1+e2;
})
console.log(e);

