const input=document.getElementById("addInput");
const form=document.getElementById("addForm");
const ol=document.querySelector("ol");
const clearAll=document.getElementById("clearButton");
// let count=1;
function addTodo (){
    const newTodo=input.value.trim();
    if(newTodo=== "" ){
        console.log("Please,enter something!")
    }else{
        const li=document.createElement("li");
        li.textContent=newTodo;
        li.className="md:w-[350px] border-1 border-emerald-500 rounded-xl flex justify-between m-1 h-[45px] py-2 px-3";
        const icon=document.createElement("div")
        icon.innerHTML+=`
            <i class="fa-solid -my-3 p-3 fa-trash h-[40px] cursor-pointer w-[40px] bg-emerald-500 rounded-xl text-white"></i>
        
        `
        li.appendChild(icon);
        ol.appendChild(li);
        icon.addEventListener("click",()=>{
            li.remove();
        })
        // count++;
        input.value="";
        
    }
    
    
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    addTodo();
});

clearAll.addEventListener("click",()=>{
    ol.innerHTML=""
})

    