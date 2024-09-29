var btns=document.querySelectorAll(".btn")
var reset=document.querySelector(".reset")
var win=document.querySelector(".win")
var msg=document.querySelector(".msg")
var newGame=document.querySelector(".newGame")
const winptrn=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetgame=()=>
{
    flag=true;
    enablebtns()
    msg.classList.add("hide");
};
var flag=true
btns.forEach(function(btn){
    btn.addEventListener("click",function(){
        if(flag===true){
            btn.innerHTML="X"
            btn.style.color="red"
            flag=false
        }
        else{
            btn.innerHTML="0"
            btn.style.color="blue"
            flag=true
        }
        btn.disabled=true;
        checkWinner();
    });
});
const disblebtns=()=>{
    for(let bt of btns){
        bt.disabled=true
    }
};
    const enablebtns=()=>{
        for(let bt of btns){
            bt.disabled=false
            bt.innerText=""
        }

};
const showWin=(winner)=>{
    win.innerText=`Congratulation ! Winner is ${winner}`;
    msg.classList.remove("hide");
    disblebtns();
};
const checkWinner = () => {
    for(let pattern of winptrn){
        let ptrn1=btns[pattern[0]].innerText;
        let ptrn2= btns[pattern[1]].innerText;
        let ptrn3= btns[pattern[2]].innerText;
        if(ptrn1!=="" && ptrn2!="" & ptrn3!==""){
            if(ptrn1===ptrn2 && ptrn2===ptrn3)
            {
                showWin(ptrn1)
            }
        }
    }
};
reset.addEventListener("click",resetgame);
newGame.addEventListener("click",resetgame);