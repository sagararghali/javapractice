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
// let arr=[10,33,50,34,75,400];
// let x=arr.filter((a)=>{
// return a%10==0;
// })
// console.log(x);

// //square of elements in array
// let b=arr.map((a)=>{
//   return a*a;
// })
// console.log(b);

// // factroial of elements of array
// let c=arr.reduce((h1,h2)=>{
// return h1*h2;
// })
// console.log(c);


// guess the number game

// let num=Math.random()
// function getRandomNumber(min, max) {
//   return num * (max - min) + min;
// }
// let number=getRandomNumber(1, 100);
// let simp=Math.floor(number)
// let count=0;
// let  guess=prompt(" enter your guess");
// while(guess>=1 && guess<=100){
//    if(guess<simp){
// console.log("The right number is greater than: "+guess+" please try again");
//  guess=prompt("Again enter your guess");
//  count++;
//   }
//   else if (guess>simp){
//     console.log("The right number is smaller than: "+guess+" please try again");
//      guess=prompt("Again enter your guess");
//      count++;
//   }
//   else{
//     console.log("Congratulation you have guessed right number");
//     console.log("Game over");
//     break;
// }
// }
// let game=100-(count*3);
// console.log("the random number was: "+simp);
// console.log("your score is: "+game);


// rock paper scisoors

// function getRandomCharFromSet(charSet) {
//   const randomIndex = Math.floor(Math.random() * charSet.length);
//   return charSet[randomIndex];
// }
// function getRandomStringFromSet(charSet, length) {
//   let randomString = '';
//   for (let i = 0; i < length; i++) {
//     randomString += getRandomCharFromSet(charSet);
//   }
//   return randomString;
// }
// const charSet = ['rock', 'paper', 'scissors']; // Replace these with the characters you want to use
// let x=getRandomStringFromSet(charSet, 1);
//  let  choice=prompt(" Are you ready to start the game?? ROLL YOUR HAND");
//  if(choice==x){
//     console.log("you have won the game");
//  console.log("the hand sign was: "+x);
//   }
//   else{
// console.log("you have lose the game");
// console.log("Game Over");
// console.log("the hand sign was: "+x);
//   }

//destructuring array and spread syntax
// let arr =[1,2,3]
// console.log(arr);
// //converting array into object
// let [a,b,c]=arr
// console.log(a,b,c);

//spread syntax
// let arr=[1,2,3,4,5,6]
// let [a,b,c,...rest]=[1,2,3,4,5,6,7]
// console.log(rest);

//function using spread
// let arr=[4,5,6]
// let sum =(a,b,c)=>{
//   return a+b+c;
// }
// console.log(sum(...arr));

//spread in object for replacing value 
// let obj={
//   name:"sagar",
//   age:16,
//   company:"abc"
// }
// console.log({...obj,name:"i am sagar"});

// const [a, b, ...rest] = [1,9,5,4,6,4];
// let { pop, push }= rest ;
// console.log(a,b,rest);
// let last =pop.call(rest);
// console.log(rest); 
// console.log(last);
// push.call(rest,55)
// console.log(rest);

//onchange
// document.getElementById("mySelect").addEventListener('change',function(){
//   alert( this.value+" is selected")
//   console.log("he");
// })

//onfocus
// document.getElementById('username').addEventListener('focus', function() {
//   this.style.backgroundColor = 'red';
//   this.style.border = "10px solid blue";
// });

// timedate
// let a=new Date();
// let h=a.getHours()
// let m=a.getMinutes()
// let s=a.getSeconds()
// let mm=a.getMilliseconds()
// let d=a.getDate()
// let mon=a.getMonth()
// console.log(h,m,s,mm,mon,d);

// (callbacks) importing any link using script.src (it will import any link like <script src="link.."></script> with out knowing user)
// function load(srclink,callback){
//     var script =document.createElement("script");
//     script.src=srclink;
//     //this function will notify you that script is loaded
//     script.onload=()=>{
//         console.log("script is loaded"+ srclink);
//         callback();
//     }
//     document.body.appendChild(script);
// }
//     fun1=()=>{
// alert("i have loaded bootstrap link")
//     }
//     fun2=()=>{
//         alert("i have loaded another link")
//             }
// load("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",fun2);
// load("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",fun1);

// callbacks hell-situation in javascript where callbacks are nested within other callbacks to the degree where the code is difficult to read. old pattern to handle asynchronous functions(nowdays to prevent callback hells we use promises+async in js)
















