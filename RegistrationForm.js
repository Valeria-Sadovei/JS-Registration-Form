const regForm = document.getElementById('regForm');
const username = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPsw = document.getElementById("confirm");
const userErr = document.getElementById('enterUser');
const emailErr = document.getElementById('enterEmail');
const pswError = document.getElementById('enterPsw');
const confirmErr= document.getElementById('confirmPsw');

regForm.addEventListener("submit", (a) => {
    a.preventDefault();
    checkUsername();
    checkEmail();
    checkPassword();
    checkPassword2();
});  

function checkEmail() {
    const correctEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(correctEmail)) {
        email.style.borderColor = "green";
        return true;
    } else {
        email.style.borderColor = "red";
        emailErr.innerHTML = "Email is not valid"
        return false;
    }
};  

function checkUsername() {
    const userName = username.value;
    if (userName === "" || userName.length < 3) {
        userErr.innerHTML = "Username must be at least 3 characters";
        username.style.borderColor = "red";
        return false;
    } else {
        username.value.innerHTML = username.value;
        username.style.borderColor = "green";
        return true;
    }
};                          

function checkPassword() {
    if (password.value == "" || password.value.length < 6) {
        pswError.innerHTML = "Password must be at least 6 characters";
        password.style.borderColor = "red"; 
        return false;
    } else {
        password.style.borderColor = "green";
        return true;
    }
};           

function checkPassword2() {
    if (confirmPsw.value == "" || password.value != confirmPsw.value) {
        confirmErr.innerHTML = "Password2 is required";
        confirmPsw.style.borderColor = "red";
        return false;
    } else {
        confirmPsw.style.borderColor = "green";
        return true;
    }
};
