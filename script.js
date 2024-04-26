var task = document.querySelectorAll("li");
var btAdd = document.getElementById("add");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");


function isNotEmpty(){
    return input.value.length > 0;
}

function createListIten(){
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    var btDelete = document.createElement("button");
    checkbox.type = "checkbox";
    checkbox.setAttribute('onclick', 'isDone(this)');
    btDelete.setAttribute('onclick', 'toErase(this)');

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btDelete);
    btDelete.appendChild(document.createTextNode("Delete"));
    ul.appendChild(li);
    input.value = "";
}

function addTaskClick(){
    if (isNotEmpty()){
        createListIten();
    }
}

function addTaskKey(event){
    if (isNotEmpty() && event.keyCode === 13){
        createListIten();
    }
}

btAdd.addEventListener("click",addTaskClick);
input.addEventListener("keypress",addTaskKey);

function isDone(check){
    check.parentElement.classList.toggle("done");
}

function toErase(task){
    task.parentElement.remove();
}

var btClear = document.getElementById("clear");

function clearAll(){
    var liList = document.querySelectorAll("li");
    for (let i = 0; i < liList.length; i++){
        liList[i].remove();
    }
}

btClear.addEventListener("click",clearAll);