const loginForm = document.querySelector('.loginForm');
const loginInput = document.querySelector('.loginForm input');
const greeting = document.querySelector('#greeting');

const hiddenClass = 'hidden';
const usernameKey = "username";

function greetingGroup(username){
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove(hiddenClass);
}

function onLoginsubmit(event){
    loginForm.classList.add(hiddenClass);
    event.preventDefault(); // 기본동작을 막는 역할
    const username = loginInput.value; //input의 값
    localStorage.setItem(usernameKey, username); //쿠키 처럼 인풋으로 받은 내용을 로컬스토리지에 저장시켜놓는것 f5 했을 때도 계속 남아있기위해.
    greetingGroup(username);
}
const savedUsername = localStorage.getItem(usernameKey); // 로컬스토리지에 저장시켜놓은 값

if(savedUsername === null){
    // form을 보여줌
    loginForm.classList.remove(hiddenClass);
    loginForm.addEventListener("submit", onLoginsubmit);
}else{
    // text를 보여줌. 
    greetingGroup(savedUsername);
}

// #4.7 super recap 부터

