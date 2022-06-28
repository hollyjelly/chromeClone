const clock = document.querySelector('.clock');

function getClock(){
    const date = new Date(); //날짜를 불러올 수 있음.
    const hours = String(date.getHours()).padStart(2, "0"); // 앞을 string으로 묶어주지 않으면 실행되지 않음.(문자가 아니기때문)
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // getHours : 시간을 불러옴, getMinutes : 분을 불러옴, getSeconds 초를 불러옴
    // padStart 숫자의 길이가 2개가 되도록 할 수 있음 앞에 2, 는 갯수 0은 추가할 문자
}

getClock(); // f5 를 눌러도 시간이 바로 뜨게하기 위해서.
setInterval(getClock, 1000); //두개의 argument를 받고 시간마다 반복