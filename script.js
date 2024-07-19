let date=document.querySelector("#date");
console.log(date);
let dayDate=new Date().toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric"});
date.innerHTML=`<h1>${dayDate}</h1>`;

let newtodo=document.querySelector(".inputTodo>input");
console.log(newtodo);
function clearnew(){
    this.value="";
}
newtodo.addEventListener("click",clearnew);

let add=document.querySelector("#plus");
console.log(add);
let cut;
function create(){
   
 if(newtodo.value==="New To do..."||newtodo.value==""){
    return;
 }
 //let inputvalue=document.querySelector(".inputTodo>input");
 
 let list=document.createElement("li");
 list.setAttribute("class","list-group-item p-3");
 list.innerHTML=`<input class="form-check-input me-1" id="todo-1" type="checkbox">
      <label class="form-check-label" for="todo-1">
              ${newtodo.value}
      </label>`
     // console.log(list);
document.querySelector("ul").appendChild(list);
newtodo.value="New To do...";
cut=document.querySelectorAll("input[type=checkbox]");
console.log(cut);
     cut.forEach((item,idx)=>{
    let form=  document.querySelectorAll(".form-check-label")[idx];
    console.log(form);
     item.addEventListener("change",()=>{
        let data=form.innerText;
        console.log(data);
        form.innerHTML=`<strike>${data}</strike>`
             
            //form.appendChild(strikevalue);
     })
});

}
add.addEventListener("click",create);


let vanish=document.querySelector("#clear>button");
console.log(vanish);
vanish.addEventListener("click",()=>{
    let ul=document.querySelector("ul");
    ul.innerHTML="";
}
)


