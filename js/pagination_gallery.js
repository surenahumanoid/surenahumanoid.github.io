const photoItems=document.querySelector(".gallery-photos").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const page=document.querySelector(".page-num");
const maxItem=6;
let index=1;

const pagination=Math.ceil(photoItems.length/maxItem);

prev.addEventListener("click",function(){
    index--;
    check();
    showItems();
})

next.addEventListener("click",function(){
    index++;
    check();
    showItems();  
})

function check(){
    if(index==pagination){
        next.classList.add("disabled");
    }
    else{
        next.classList.remove("disabled");	
    }

    if(index==1){
        prev.classList.add("disabled");
    }
    else{
        prev.classList.remove("disabled");	
    }
}

function showItems() {
    for(let i=0;i<photoItems.length; i++){
        photoItems[i].classList.remove("show");
        photoItems[i].classList.add("hide");


       if(i>=(index*maxItem)-maxItem && i<index*maxItem){
        photoItems[i].classList.remove("hide");
        photoItems[i].classList.add("show");
       }
       page.innerHTML=index;
    }
}
window.onload=function(){
    showItems();
    check();
}