//input's
const username = document.getElementById("username");
const password = document.getElementById("password");
const footer = document.querySelector("footer");

//button's
const login = document.getElementById("login_btn");

function error_msg(msg) {
    const error = document.createElement("p");
    error.id = "error_message";

    error.innerText = msg;
    error.style.color = "red";
    footer.insertAdjacentElement('beforebegin', error);
}
