const button=document.getElementById("colorButton");
let bool=true;
button.addEventListener("click",()=>{
    if(bool){
    button.classList.style.color("#aa34bc");
    bool=false;
    }else{
        button.classList.toggle("#ff6347");
        bool=true;
    }
})