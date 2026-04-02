const input=document.getElementById("addInput");
const form=document.getElementById("addForm");
const ol=document.querySelector("ol");
const clearAll=document.getElementById("clearButton");
let todo=[];
function addTodo (){
    const newTodo=input.value.trim();
    if(newTodo=== "" ){
        alert("Please,enter something!");
        return;
    }
    if(todo.includes(newTodo)){
        alert("It's already added");
        return;
    }
    todo.push(newTodo);
    localStorage.setItem("todo",JSON.stringify(todo));
    Todo(newTodo);
    input.value="";
    
}
function Todo(newTodo){
    ol.innerHTML+=`
         <li class="bg-[#C6E1E6] border-l-5 border-1 border-emerald-500 p-[7px] rounded-[10px] flex justify-between items-center">${newTodo}<div onclick="remove(this,'${newTodo}')"><i class="fa-solid fa-trash text-emerald-500 cursor-pointer "></i></div> </li>
        `
}

window.addEventListener("DOMContentLoaded",()=>{
    const data=JSON.parse(localStorage.getItem("todo"));
        todo=data
        todo.forEach(element => {
            Todo(element);
        });


})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    addTodo();
});

clearAll.addEventListener("click",()=>{
    ol.innerHTML=""
    todo=[];
    localStorage.setItem("todo",JSON.stringify(todo));
})

function remove(element,value){
    element.parentElement.remove();
    todo=todo.filter(e=>e!==value)
    console.log(todo)
    localStorage.setItem("todo",JSON.stringify(todo));
}