const container=document.querySelector('.container');

for(let i=0;i<=255;i++){
    let piece = document.createElement('div');
    piece.classList.add("colori");
    container.appendChild(piece);
   
}


const piece = document.querySelectorAll(".colori");
const changeColor=(ev)=>{
   ev.classList.add('gjelbert');
  console.log('go')
}




container.addEventListener("click",(e)=>{
    target=e.target;
    changeColor(target);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click",function(){
    window.location.reload();
})



const clear1=document.querySelector("#clear")

if(clear1.addEventListener('click',function(e){
    container.addEventListener("click",(e)=>{
        target=e.target;
        target.style.backgroundColor='blue';
    })
  
})){}