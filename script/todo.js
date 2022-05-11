let todoList = ['vsdfsdf', 'sdfsdf'];

function addToDoList() {
    let inp = document.getElementById('listtodo');
    todoList.push(inp.value);
    let ulRaw = document.createElement('li');
    for (let key_elem in todoList) {
        ulRaw.innerText = todoList[key_elem];
        todotodo.appendChild(ulRaw);
    }
}
