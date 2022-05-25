const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout-button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (e) => {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  painGreetings(username);
  showLogoutForm();
};

const painGreetings = function (username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
};

const showLoginForm = function () {
  loginInput.value = "";
  localStorage.clear();
  logout.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
};

logout.addEventListener("click", (e) => {
  logout.classList.remove(HIDDEN_CLASSNAME);
  showLoginForm();
});

const showLogoutForm = function () {
  logout.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  painGreetings(savedUsername);
  showLogoutForm();
}