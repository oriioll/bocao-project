//Input elements IDs (login)
const loginBtn = document.getElementById('loginBtn');
const loginEmail = document.getElementById('loginEmail');
const loginPwd = document.getElementById('loginPwd');
const loginErrorMsg = document.getElementById('loginError');

//Input elements IDs (register)
const registerBtn = document.getElementById('registerBtn');
const registerUser = document.getElementById('registerUser');
const registerEmail = document.getElementById('registerEmail');
const registerPwd = document.getElementById('registerPwd');
const checkPwd = document.getElementById('registerPwdCheck');
const registerErrorMsg = document.getElementById('registerError');



const username = localStorage.getItem("username");
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");


//logica para solo cargar eventos si estas en la pagina correcta
if(window.location.href.includes('login')) {
    loginBtn.addEventListener('click', (event)=> {
        //Evitar que se reinicie la pagina al clickear el boton
        event.preventDefault();

        if((loginEmail.value == email || loginEmail.value == username) && loginPwd.value == password) {
            console.log('login succesfull')
            window.location.href = "../home";
            loginErrorMsg.style.display = "none";
        } else {
            console.log(username, email, password)
            loginErrorMsg.style.display = "block";
        }
    });
}


if(window.location.href.includes('register')) {
    registerBtn.addEventListener('click', (event)=> {
        event.preventDefault();

        if(registerPwd.value.length < 5) {
            registerErrorMsg.style.display = "block"
            registerErrorMsg.innerText = "Las contraseña debe tener almenos 6 carácteres.";
        }else if(registerPwd.value != checkPwd.value) {
            registerErrorMsg.style.display = "block";
            registerErrorMsg.innerText = "Las contraseñas no coinciden";
        }else if(registerEmail.value.trim() === "" || registerUser.value.trim() === "") { //comprovar que no haya solo espacios, con trim borra espacios
            registerErrorMsg.style.display = "block";
            registerErrorMsg.innerText = "los campos no puede estar vacío ni contener solo espacios";
        }else if (registerPwd.value === checkPwd.value) {
            console.log("password check successful")
            registerErrorMsg.display = "none";
            //guardar en local storage para no perder al recarfar
            localStorage.setItem("username", registerUser.value);
            localStorage.setItem("email", registerEmail.value);
            localStorage.setItem("password", registerPwd.value);
            window.location.href = "../login";
        } 
})
}

export const user = username;