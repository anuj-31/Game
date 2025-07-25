let boxes=document.querySelectorAll(".Box");
let resetbtn=document.querySelector("#resetbtn");
let newGamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],


];
const resetGame =()=>{
    let turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    
}

boxes.forEach((Box)=>{
    Box.addEventListener("click",()=>{
        console.log("Box was click");
        if(turn0){
            Box.innerText="O";
            turn0=false;
        //     if(Box.innerText=="O"){
        //  Box.classList.add("color");
        //     }
        }
        else{
            Box.innerText="X";
                   turn0=true;
        }
        Box.disabled=true;
        checkwinner();
    });
});
const disableBoxes=()=>{
    for(let Box of boxes){
        Box.disabled=true;
    }

};
const enableBoxes=()=>{
    for(let Box of boxes){
        Box.disabled=false;
        Box.innerText="";
    }

};
const showwinner=(winner)=>{
    msg.innerText=`Congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();


}
const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
         let pos2val=boxes[pattern[1]].innerText;
          let pos3val=boxes[pattern[2]].innerText;
          if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val==pos2val&&pos2val==pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
          }
    }
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)