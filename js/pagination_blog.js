const postItems=document.querySelector(".blog-posts").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const page=document.querySelector(".page-num");
const maxItem=2;
let index=1;

const pagination=Math.ceil(postItems.length/maxItem);

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
    for(let i=0;i<postItems.length; i++){
        postItems[i].classList.remove("show");
        postItems[i].classList.add("hide");


       if(i>=(index*maxItem)-maxItem && i<index*maxItem){
        postItems[i].classList.remove("hide");
        postItems[i].classList.add("show");
       }
       page.innerHTML=index;
    }
}
window.onload=function(){
    showItems();
    check();
}