const todoForm = document.querySelector('.todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todoList');

const todosKey = "todos";
let todos = [];

function saveTodo(){
    localStorage.setItem(todosKey, JSON.stringify(todos));
    // JSON.stringify arry로 저장시켜줌
}

function deleteTodo(event){
    //x를 눌렀을 때 삭제하는 이벤트

    const li = event.target.parentElement;
    console.log(li.id);
    // target은 클릭한애의 html요소고 parentElemtn는 클릭한애 html 부모요소를 가지고 오는 것.
    li.remove();
    todos = todos.filter((todo)=> todo.id !== parseInt(li.id));
    // filter 는 array를 다시 만들줌 뒤에 넣어준 조건에 맞는 애들은 false로 true만으로 구성된 array 구성
    // parseInt를 넣어주지 않으면 number가 아닌 string으로 입력돼서 번호인 id로  입력 되지 않아 이벤트가 실행되지 않음.
    saveTodo(); // 스토리지를 저장해주지 않으면 바꿔준 스토리지가 저장이 되지 않아요
}

function paintToDo(newTodo){
    // 저장된 list내용을 html에 태그로 추가

    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText= newTodo.text; // object로 만든 상태라 text를 불러와줘야 li에 text가 들어감
    const button = document.createElement('button');
    button.innerText = "x";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span); //append는 맨 뒤에 배치돼야함. (태그 생성 -> text 삽입 -> 위치 배치)
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    // list내용을 입력했을 때 값 저장

    event.preventDefault(); // 새로고침 현상을 없애기위함.
    const newTodo = todoInput.value; // value를 새로운 변수에 복사
    todoInput.value = ""; // value를 비우는것 하지만 위에 변수에는 변화가 일어나지 않음.
    const newTodoObj = {
        text : newTodo,
        id : Date.now(), // 이름을 랜덤으로 배정해줌 (겹치는 text 내용이여도 id로 구분하기위해)
    };
    todos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleToDoSubmit);


const savedTodos = localStorage.getItem(todosKey);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos; // 새로고침했을 때 없어진 array의 내용을 다시 복원 시켜주는것.
    parsedTodos.forEach(paintToDo);
}



