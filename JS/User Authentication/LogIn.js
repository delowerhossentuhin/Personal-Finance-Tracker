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
login.addEventListener("click", function (event) {
    event.preventDefault();
    const uname = username.value;
    const pass = password.value;


    const oldError = document.getElementById("error_message");
    if (oldError) {
        oldError.remove();
    }



    if (!/^[A-Za-z]+$/.test(uname)) {
        error_msg("Please Enter A-Z or a-z")

    }

    if (uname.length > 10) {
        error_msg("uname length must be less 11 charecter");
    }

    if (password.length > 10) {
        error_msg("password length must be less than 11 charecter");
    }










});
