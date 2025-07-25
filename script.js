// console.log("heloo");
// console.dir(window);
// console.dir(document.body.childNodes[1]);
// let heading = document.getElementById("heading");
// console.dir(heading);
// let headings=document.getElementsByClassName("heading-class")
// console.dir(headings);
// let para=document.getElementsByTagName("p");
// console.dir(para);
// let firstel=document.querySelector("p");
// console.dir(firstel);

// let allel=document.querySelectorAll("p");
// console.dir(allel);
// let div=document.querySelector("div");
// console.dir(div);
// let data=document.querySelector("h1");
// console.dir(data);

// let data=document.querySelector("h1");
// console.dir(data);
// let divs=document.querySelectorAll(".Box");
// console.log(divs[0]);
// divs[0].innerText="why";
// divs[1].innerText="why1";
// divs[2].innerText="why2";
// for(div of divs){
//     console.log(div.innerText);
// }
// let idx=1;
// for(div of divs){
//    div.innerText=`new unique ${idx}`;
//    idx++;
// }
// let div=document.querySelector("div");
// console.log(div);
// let id1=div.getAttribute("id1");
// console.log(id1);
// let set=div.setAttribute("id1","p111");
// console.log(set);
// let div=document.querySelector("div");
// div.style.visibility="hidden";
// div.style.backgroundColor="pink";
// div.style.fontSize="20px";
// div.innerText="Hello";
// let newbtn=document.createElement("button");
// newbtn.innerText="Click me!";
// console.log(newbtn);
// let div =document.querySelector("div");
// // div.prepend(newbtn);
// div.before(newbtn);
// div.after(newbtn);
// let heading=document.createElement("h1");
// heading.innerText="anuj";
// let body=document.querySelector("body");
// body.prepend(heading);

//event
let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");

// }
btn1.addEventListener("click",()=>{

    console.log("button 1 was clicked");
});