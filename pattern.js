

// let sap =()=>{
//    let x=5
//    let y=6
//    return x+y
//    }
//    let p=sap()
//    console.log(p)

//    let g=(name)=>{
//       console.log("hello"+ name);
//    }
//    g(" ram")

  





   //             "use strict";  
        //             //to insert variable  
        // // let a=34;
        // //         console.log(a);
        // // function sap(){  //sap()
        
        
        
        // //     console.log("hey sagar");
        // // }
        
        
        // //function inside the object
        // let obj1={
        //     r:1,
        //     b:3,
        //     func:function (number){  
        //        obj1.func(50)
        //         console.log("the number is:"+number);
        //     }
        // }
        
        
        // //conformation window will be popup 
        // // document.addEventListener("click", function click(){
        // //     console.log("clicked");
        // //     //alert("hello");
        // //     let c=confirm("are you sure");
        // //     console.log(c);
        // // })
        // // undefined variables inside the variable
        // // function fun(number){
        // //     console.log("the value is :"+this);
        // // }
        // // fun();
        
        // //arrow function in java with undefined variable"this"
        // // let obj2={
           
        // //  newfun: (number)=> {
        // //     console.log("the value is:"+this);
        // // }}
        // // obj2.newfun();

        // //call back function
        // // setTimeout(() => {
        // //     console.log("i have come ");
        // // },3000);
        // // console.log("hii i have come first");
        
        // // console.log(x);
        // // var x=10;
        // // console.log(x)
        // // lol()
        
        // //  function lol(){
        // //     console.log("sagar")
        // // }
        
        
        // let sum=()=>{
        //     return 5;
        
        // }
        // let a =sum();
        // console.log(a);
        //  let add=()=>{
        //      const x={
        // name:"sagar",
        // exp:"5"
        //     }
        //     console.log(x.name)
        // }
        
        
    
//    let a = document.getElementById('control-1');
// let b = document.getElementById('sap-1');
// a.addEventListener('click',()=>{
// b.classList.toggle('active');
// });

// console.log("hi my name is sagar")


// alert type.....................................
// function show(){
//     alert("i am ui alert");
// }
// document.getElementById("hi").addEventListener("click", show);

// function hi(){
//     alert("i am here haita ");

// let obj2={
           
//          newfun:(sap)=> {
    //             console.log("the name is:"+sap);
    //         }}
    //         obj2.newfun("sagar");
  
//     let x={
//         name:"sagar",
//         exp:"30",
//         show: function(){
// console.log("hi ever");
//             setTimeout(() =>{
//                 console.log(`the name is ${this.name} \nthe role is ${this.exp}`)
//             }, 1000);
//         }
//     }
// x.show()


// higher order funtion and callback function
function add(a,b,cb){
let c=a+b;
cb(c)
return ()=> console.log(c)

}
let cfunction=add(20,40,()=>{})
cfunction();

//array in js 

let arymarks=[10,20,30,null,"nogiven"]
console.log(arymarks);
  console.log(arymarks[0]);
  arymarks[5]="sagar"//i have seperatelly defined array5
  console.log(arymarks[5]);//before, array5 was not defined
  console.log("the length of array is",arymarks.length);
//for loop in array
  let arysagar=["my","name","is ","sagar","arghali"];
    for  ( let i=0; i<arysagar.length; i++)  
console.log(arysagar[i]);
    // array methods
    let sap=[1,2,3,4,5,6];
    console.log(sap.toString());

    console.log(sap.join(" and "))
    //pop method 
    console.log( sap.pop());//display last element and popped it out.
    console.log(sap);// it has display the element of array after popping out the last element of array
    sap.pop();//it has popout last element of array without knowing user..
    console.log(sap);// it has display the element of array after popping out the last element of array
    console.log( sap.pop());//it has displayed last element of remaining array.after popping out
// push method -it add new element in array in last
let sap1=[1,2,3,4,5,6];
let r=sap1.push(50)
console.log(sap1,r);
//shift method-same as pop but it pop out from first.


  






