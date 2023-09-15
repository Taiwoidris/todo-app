// dom call f
let username = document.querySelector('#username')
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let gender = document.querySelector("#gender")
let registerbtn = document.querySelector("#mybtnreg")
let msg = document.querySelector('.msg')


// initliatilize register function
loadRegisterUser()

function loadRegisterUser() {


    registerbtn.addEventListener('click', registerUser)
}




function registerUser(e) {

    let newusername = username.value
    let newpassword = password.value
    let newemail = email.value
    let newgender = gender.value

    if (newusername=='' || !newpassword || !newemail || !newgender) {
        msg.innerHTML = "<p  class='alert alert-danger'> fill all required field</p>"
    } else {
        localStorage.setItem('username', newusername)
        localStorage.setItem('email', newemail)
        localStorage.setItem('password', newpassword)
        localStorage.setItem('gender', newgender )

        alert("registration successful now login")
        location.href = 'index.html'

    }









    e.preventDefault()

}
// // load register function
// loadRegisterUser()


// function loadRegisterUser() {

//     registerbtn.addEventListener('click', registerUser)
// }


// function registerUser(e) {

//     if (!username.value || !password.value || !email.value  || !gender.value) {
//         msg.innerHTML = '<p class="alert alert-danger">fill all required field</p>'
//     } else {
//         //    getiing user input
//         let user = username.value
//         let pass = password.value
//         let ema = email.value
//         let gen = gender.value


//         // save to locals storage
//         localStorage.setItem('username', JSON.stringify(user))
//         localStorage.setItem('password', JSON.stringify(pass))
//         localStorage.setItem('email', JSON.stringify(ema))
//         localStorage.setItem('gender', JSON.stringify(gen))
//         alert('Successful register')
//         location.href = "index.html"



//     }

//     e.preventDefault()


// }