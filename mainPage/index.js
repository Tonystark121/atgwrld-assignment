const loginBtn = document.querySelector('#login')
const registerBtn = document.querySelector('#register')
const loginContainer = document.querySelector('#loginBox')
const registerContainer = document.querySelector('#registerContainer')
const resetBtn = document.querySelector('#cross')
const resetdivsignin = document.querySelectorAll('.sign_cross_icon')[1];
const resetdivsignup = document.querySelectorAll('.sign_cross_icon')[0];

console.log(resetdivsignin, resetdivsignup);

loginBtn.addEventListener('click', () => {
    loginContainer.style.display = "flex"
})
registerBtn.addEventListener('click', () => {
    registerContainer.style.display = "flex"
})

resetdivsignup.addEventListener("click", () => {
    console.log("here")
    registerContainer.style.display = "none"
})
resetdivsignin.addEventListener("click", () => {
    loginContainer.style.display = "none"
})
