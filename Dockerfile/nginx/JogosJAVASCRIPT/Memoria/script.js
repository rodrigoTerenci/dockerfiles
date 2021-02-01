const cards = document.querySelectorAll('.card');
let firstFlip, secondFlip,flag=false;
let locBoard= false;

function flipCard(){
    if(this===firstFlip) return;
    if(locBoard) return;
    this.classList.add('flip');

        if(!firstFlip){
            firstFlip=this;
            return;
        }
    secondFlip=this;
    
    checkCard();

}
function checkCard(){
    
    if(firstFlip.dataset.card === secondFlip.dataset.card)
    {
        disableCards();
        return;
    }
    unflipCards();
    return;
}

cards.forEach((card)=>{
    card.addEventListener('click',flipCard);
});

function disableCards(){
    
    firstFlip.removeEventListener('click',flipCard);
    secondFlip.removeEventListener('click',flipCard);
    //firstFlip=!firstFlip;
    resetBoard();
}

function unflipCards(){
    locBoard=true;
    
    setTimeout(()=>{
            
        firstFlip.classList.remove('flip');
        secondFlip.classList.remove('flip');
        //locBoard=false;
        resetBoard()
    },1500);
}

function resetBoard(){
   locBoard=false;
   [firstFlip, secondFlip]=[undefined, undefined]
}

(function shuffle(){
    cards.forEach((card)=>
    {
        let random= Math.floor(Math.random()*12)
        card.style.order= random;
    })
})();//ImediatlyInvoqueFunction