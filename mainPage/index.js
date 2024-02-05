const loginBtn = document.querySelector('#login')
const registerBtn = document.querySelector('#register')
const loginContainer = document.querySelector('#loginBox')
const registerContainer = document.querySelector('#registerContainer')
const resetBtn = document.querySelector('#cross')
const resetdivsignin = document.querySelector('.signin_cross_icon');
const resetdivsignup = document.querySelector('.signup_cross_icon');


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

