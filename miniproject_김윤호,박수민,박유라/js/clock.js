//html에서 js-clock 클래스를 가지는 것을 가져오기
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

//현재 시간 정보 가져오기
function getTime(){
    //시간 가져오기
    const date = new Date();
    //가져온 시간에서 시, 분, 초를 각각 빼내기
    const minitues = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    //시, 분,초가 10미만일때 9,8,7이 아니라 09,08,07로 표시되기 위한 삼항연산자!
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minitues < 10 ? `0${minitues}` : minitues}:${seconds < 10 ? `0${seconds}` : seconds}`;

}

function init(){
    getTime();
    //함수 실행간격 설정, setInterval은 주기적으로 인자를 실행하는 함수임
    setInterval(getTime, 1000);
}

init();