let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let newBtn=document.querySelector("#new-btn");

let turnO=true
let count=0;

const winpatten=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame=()=>{
    turnO=true;
    count=0;
    enableBox();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML="O";
            console.log(box);
            turnO=false;
        } else {
             box.innerHTML="X";
             console.log(box);
             turnO=true;
        }
        box.disabled=true;
        count++;

        let iswinner = checkWinner();
        if (count === 9 && ! iswinner){
            gameDraw();
        }     
    });
});
const gameDraw=()=>{
    msg.innerHTML=`No Winner try again....`;
    msgContainer.classList.remove("hide");   
    disable.box();
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable.box();
}

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const checkWinner=()=>{
    for (let pattern of winpatten) {
        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    }
};

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
