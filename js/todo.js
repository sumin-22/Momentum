const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

//toDos 저장소 만들기
const TODOS_LS = "toDos";
//todolist 목록 배열. 계속해서 변화하기 때문에 const가 아닌 let사용
let toDos = [];

//리스트 지우기
function deleteToDo(e){
    //이벤트가 일어나는 장소 알려주기
    const btn = e.target;
    //btn의 부모 노드를 li에 저장
    const li = btn.parentNode;
    //todolist에서 li 요소 삭제
    toDoList.removeChild(li);
    //filter는 해당함수가 toDos의 모든 item들에게 실행하도록 하여 true item으로 다시 배열을 구성
    const cleanToDos = toDos.filter(function(toDo){
        //toDo.id와 li.id를 비교해서 다른것만 toDos에 저장!!
        return toDo.id !== parseInt(li.id);
    });
    //실행 배열과 저장소 배열이 차이가 나기 때문에 필터된 배열도 다시 할당
    toDos = cleanToDos;
    saveToDos();
}; 

//요소를 저장하기 위한 함수
function saveToDos(){
    // JSON.stringify는 자바스크립트 object를 string으로 바꿔줌
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

//화면에 출력해주기
function paintToDo(text){
    //빈 li만들기
    const li = document.createElement("li");
    //버튼 만들기
    const delBtn = document.createElement("button");
    delBtn.innerText = "🗑️";
    //delBtn(🗑️)을 누르면 deleteToDo가 실행되서 삭제가 진행
    delBtn.addEventListener("click", deleteToDo);
    //span공간만듬
    const span = document.createElement("span");
    //받아온 text 넣어줌
    span.innerText = text;
    //toDos길이 +1 을 해줘야 id값이 1부터 들어가게 된다.
    const newId = toDos.length + 1;
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);

    //할일을 클릭하면 줄 긋기
    span.addEventListener('click', function(){  
        if(span.style.textDecoration === "none"){
            span.style.textDecoration = "line-through";
        } else{
            span.style.textDecoration = "none";
        }
      
    })


    // 페이지에 스크롤 보이지 않게 하기 위해 숫자 제한 : 7개
    if(newId < 8){
        toDoList.appendChild(li);
    }else{
        alert("최대 7개까지 작성할 수 있습니다!")
    }

    //객체 만들어서 toDos에 저장
    const toDoObj = {
        text: text,
        id: newId
    };
    
    // 원페이지에 스크롤 보이지 않게 하기 위해 숫자 제한 : 7개
    if(newId < 8){
        toDos.push(toDoObj);
    }
    saveToDos();
};

//엔터 누르면 작동되는 함수
function handleSubmit(e){
    //새로고침 없애주는 함수
    e.preventDefault();
    //작성값 받기
    const currentValue = toDoInput.value;
    //화면에 출력
    paintToDo(currentValue);
    // 엔터 누르면 입력창 안 초기화
    toDoInput.value = "";
};

//해야할 일 보여주기
function loadToDos(){
    //TODOS_LS에 있는 값 가져오기
    const loadedToDos = localStorage.getItem(TODOS_LS);
    //할 일이 있다면
    if(loadedToDos !== null){
        //string을 parse로 변환
        const parsedToDos = JSON.parse(loadedToDos);
        //paintTODO를 통해 출력해주기
        //forEach는 배열에 담겨있는 것에 대해서 한번씩 실행시킨다
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
};

function init(){
    //해야할 일 불러오기
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
};

init();