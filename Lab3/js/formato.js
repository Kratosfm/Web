let post = document.getElementById("Botonpost");
let clear = document.getElementById("Botonclear");
let mark = document.getElementById("Botonmarcar");
let del = document.getElementById("Botonborrar");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", Todomark);
del.addEventListener("click", Tododelete);

function TodoPost(e){
    e.preventDefault();

    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

    let currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + '<input type="checkbox" name="todo"/>&nbsp;' + todo + '<br>';
}

function TodoClear(e){
    e.preventDefault();

    var todos = document.getElementsByName("todo");
    for(var i = 0; i < todos.length; i++){
        todos[i].checked = false;
    }
}

function Todomark(e){
    e.preventDefault();

    var todos = document.getElementsByName("todo");
    for(var i = 0; i < todos.length; i++){
        todos[i].checked = true;
    }
}

function Tododelete(e){
    e.preventDefault();

    var list = document.getElementById("todoList");
    list.innerHTML = "";
}
