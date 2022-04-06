const inputText=document.querySelector(".input-text");
const addButton=document.querySelector(".add-button");
const list=document.querySelector(".list");

addButton.addEventListener("click",function(){
    const li=document.createElement("li");
    li.innerText=inputText.value;
    list.appendChild(li);

})