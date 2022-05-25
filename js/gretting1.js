const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout-button");
const login = document.querySelector("#login-button");
const loginId = document.querySelector("#login-id");

const greetingMessage = function() {
  const hour = new Date().getHours();
  if (hour > 5 && hour < 11) {
    return '좋은 아침이에요.';
  } else if (hour >= 11 && hour < 14) {
    return '벌써 점심이에요.';
  } else if (hour >= 14 && hour < 17) {
    return '좋은 오후네요.';
  } else if (hour >= 17 && hour < 23) {
    return '좋은 저녁이에요.';
  } else {
    return '오늘도 고생 많았어요.';
  }
}

if(logout.style.visibility !== 'hidden'){
    logout.style.visibility = 'hidden';
}

if(localStorage.getItem("username") !== null){
    const username = localStorage.getItem("username");
    const str1 = greetingMessage();
    greeting.innerHTML = str1 + ` ${username}`;
    loginForm.style.visibility = "hidden";
    logout.style.visibility = 'visible';
}

// 아이디 입력창에 enterkey 입력시 발생

loginId.addEventListener('keyup',(e) => {
    if(e.keyCode == 13 ){
        loginSubmit();
    }
});

login.addEventListener('click', function(){
    loginSubmit();
});

const loginSubmit = function(){
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem("username", username);
    const str = greetingMessage();
    greeting.innerHTML = str + ` ${username}`;
    loginForm.style.visibility = "hidden";
    logout.style.visibility = 'visible';
}

logout.addEventListener('click', function(){
    logoutSubmit();
})

const logoutSubmit = function(){
    localStorage.clear();
    loginForm.style.visibility = "visible";
    logout.style.visibility = 'hidden';
    greeting.innerHTML = "";
}



// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// const onLoginSubmit = (e) => {
//   e.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   localStorage.setItem(USERNAME_KEY, username);
//   login.style.visibility = 'hidden';
//   painGreetings(username);
//   showLogoutForm();
// };

// const painGreetings = function (username) {
//   greeting.classList.remove(HIDDEN_CLASSNAME);
//   greeting.innerText = `Hello ${username}`;
// };

// const showLoginForm = function () {
//   loginInput.value = "";
//   localStorage.clear();
//   logout.classList.add(HIDDEN_CLASSNAME);
//   greeting.classList.add(HIDDEN_CLASSNAME);
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
// };

// logout.addEventListener("click", (e) => {
//     login.style.visibility = 'visible';
//   logout.classList.remove(HIDDEN_CLASSNAME);
//   showLoginForm();
// });

// const showLogoutForm = function () {
//   logout.classList.remove(HIDDEN_CLASSNAME);
// };

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if (savedUsername === null) {
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//   painGreetings(savedUsername);
//   showLogoutForm();
// }

