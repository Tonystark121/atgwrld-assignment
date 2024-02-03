const loginBtn = document.querySelector('#login')
const registerBtn = document.querySelector('#register')
const loginContainer = document.querySelector('#loginBox')
const resetBtn = document.querySelector('#cross')

loginBtn.addEventListener('click', ()=>{
     loginContainer.style.display = "flex"
})
registerBtn.addEventListener('click', ()=>{
    loginContainer.style.display = "flex"
})

resetBtn.addEventListener('click', ()=>{
    loginContainer.style.display = "none"
    resetBtn.style.color = "red"
} )