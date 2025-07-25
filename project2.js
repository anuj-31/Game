let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencomputerchoice=()=>{
    const options =["rock","paper","scissors"];
   const randidx = Math.floor(Math.random()*3);
   return options[randidx];

}
const showwiner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win!");
        // msg.innerText="You win!";
         msg.innerText=`You win! your ${userchoice} beats your  ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
          compscorepara.innerText=compscore;

        console.log("you lose!");
          msg.innerText=`You lose. Your ${compchoice} beats  your ${userchoice}`;
               msg.style.backgroundColor="red";
    }
}
const drawgame = ()=>{
   console.log("game draw");
   msg.innerText="Game Draw. Play again";
      msg.style.backgroundColor="blue";
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice = gencomputerchoice();
    console.log("comp choice",compchoice);
    if(userchoice===compchoice){

        drawgame();
    }
    else {
        let userwin=true;
        if(userchoice=="rock"){
          userwin =  compchoice==="paper"?false:true;
        }
        else if (userchoice==="paper") {
            userwin = compchoice==="scissors"?false:true;
            
        }
        else{
            userwin = compchoice==="rock"?false: true;
        }
        showwiner(userwin,userchoice,compchoice);
    }

};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
console.log("choice was clicked",userchoice);
playgame(userchoice);
    })
})