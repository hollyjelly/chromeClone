function onGeoOk(position){
    const lat = position.coords.latitude; // 위도를 잡아줌
    const lon = position.coords.longitude; //경도를 잡아줌
    const apiKey = "c31967ce5e199823880f4cefc574d5a8";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    // 밑에는 fetch를 사용하기위한 공식인듯 함. data까지
    fetch(url).then(respose => respose.json()).then(data => {
        // html 에 받아온 날씨를 넣어줌
    const weather = document.querySelector('.weather span:first-child');
    const city = document.querySelector('.weather span:last-child');
    city.innerText = data.name;
    weather.innerText= `${data.weather[0].main} / ${data.main.temp}℃`; 
})
        //(network에서 확인 가능) fetch는 promise인데 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것 그래서 then을 사용해야함.
}

function onGeoError(){
    alert("can't find tou. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
// getCurrentPosition 은 onGeoOk 와 onGeoError 을 받아 object를 만듦?