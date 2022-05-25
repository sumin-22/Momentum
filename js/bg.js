const body = document.querySelector("body");

//사용할 이미지의 개수
const  IMG_NUMBER = 17;

function paintImage(imgNumber){
    //이미지를 넣어줄 공간 생성
    const image = new Image();
    //가져올 이미지 경로 설정
    image.src = `images/${imgNumber + 1}.jpg`;
    //image에 bgImage 클래스 추가
    image.classList.add("bgImage");
    //body 자식에 image 추가
    body.appendChild(image);
}

//IMG_NUMBER 이하의 임의의 정수를 얻음으로서 랜덤한 번호의 이미지를 배경이미지로 추가할 수 있다
function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    //랜덤한 수 하나 생성
    const randomNumber = getRandom();
    //그 값을 이용해서 배경 출력
    paintImage(randomNumber);
}


init();