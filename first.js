// console.log("anujk");
// console.log("padhle");
// name="tonny strak";
// age =24;
// x=null;
// y=undefined;
// console.log(y);
const student={
    fullname: "rahul",
    age: 20,
    cgpa:3.4,
    ispass:true,
}
// student["age"]=student["age"]+1;
// student["fullname"]="rahul kumar";
// console.log(student.fullname);
// const product={
//     title:"Ball Pen",
//     rating:4,
//     offer:5,
//     price:120,
// };
// console.log(product);
// const profile = {
//     username:"Anuj kumar",
//     isfollow:false,
//     followers:123,
//     following:23,
// };
// // console.log(profile);
// // console.log(typeof profile["username"]);
// console.log(typeof profile["isfollow"]);
let a=5;
let b='5'; //string char;
// console.log("a= ",a, " & b = ",b);
// console.log("a+b",a+b);
// console.log("a**b",a**b);
// console.log("a++=",++a);
// console.log("a++ = ",a++);
// console.log("a+b",++a);
// a++;
// a +=4;
// console.log("a!==b",a!==b);
// alert("hello");//one time
// let name=prompt("hello");
// console.log(name);
// let num1=prompt("enter a num");
// if(num1%5===0){
//    console.log("yes divisible"); 
// }
// else{
//     console.log("NO");
// }
// for(let i=0;i<= 5;i++){
// console.log("i",i);
// }
// console.log(i);//break false but let is replace by var thyen print 6

//for of loop
// let str="anuj";
// for(let i of str){
//     console.log("i",i);
// }

// let str="anuj";
// for(let val of str){
//     console.log("val",val);
// }


//forin
// let student1 = {
//     name:"anuj",
//     age:10,
//     cgpa:10,
//     ispasss:true,

// };
// for(let key in student1){
//     console.log("key",key,"value",student1[key]);
// }
// let number=25;
// let usernum = prompt("enter number");
// while(usernum!=number){
//     usernum=prompt("you entered wrong num . type :");

// }
// console.log("congrats! yow win");

// let obj={
//     item:"biscuit",
//     price:10,
// };
// console.log(`the cost of ${obj.item} is ${obj.price} rupees`);
// console.log("the cost of ",obj.item,"is",obj.price,"rupees");
// function sum2(a,b){
//     return a+b;
// }
// const arrowsum=(a,b)=>{
//     console.log(a+b);
// }
// let num=[1,2,3,4];
// num.forEach((val)=>
// {
// console.log(val**2);
// });
let arr=[1,2,3,4];
let output = arr.reduce((prev,curr)=>{
    return prev>curr?prev:curr;

    }
);
console.log(output);