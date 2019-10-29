const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id != parseInt(li.id);
    });
    
    toDos = cleanToDos;

    // id값 정리를 위해 내가 추가해준 부분
    let idx = 1;
    toDos.forEach(function(toDo) {
        toDo.id = idx++;
    });

    saveToDos();
}

function saveToDos() {
    //localStorage에는 string만 저장할 수 있다
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //JSON.stringify : js의 object를 string으로 바꿔준다.
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    delBtn.re
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length +  1;

    li.appendChild(span);
    li.appendChild(delBtn);

    toDoList.appendChild(li);

    li.id = newId;

    const toDoObj = {
        text : text,
        id : newId
    };

    toDos.push(toDoObj);

    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);

    toDoInput.value = ""; // 한번 todo 쓰고 나면 폼 초기화
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);

    if (toDos != null) {
        const parsedToDos = JSON.parse(toDos); // string > object로 변환

        // forEach : array에 담겨있는 거에 대해 함수를 한번씩 실행
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();