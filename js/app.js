//Common JS start
let toggle = document.querySelector("#toggle");
let password = document.querySelector("#password");
let validation = document.querySelector("#validation");
//Common JS end

//Pass toogle
toggle.addEventListener("click", function() {
    if (password.type == "text") {
        password.type = "password";
        toggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {password.type = "text";
            toggle.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
})

//Pass validation
password.addEventListener("keyup", function () {
    let passLength = password.value.length;

    if (passLength < 8) {
        validation.innerText = "Weak Password";
        validation.style.color = '#C0392B'
    } else {
        validation.innerText = "Strong Password";
        validation.style.color = '#28B463'
    }
});

password.addEventListener("click", function() {
    document.querySelector("#password").maxLength="16";
    document.querySelector("#maxpassmsg").innerHTML = "Maximum Password Length 16 Characters.";
})

//Mode change
let mode_toggler= document.querySelector("#mode-toggler");
let root= document.documentElement;
mode_toggler.addEventListener('click', function(){
    if(root.classList.contains('dark')){
        root.classList.remove('dark')
        mode_toggler.innerHTML = '<i class="fa-solid fa-moon"></i>'
        localStorage.removeItem('mode')
    }else{
        root.classList.add('dark')
        localStorage.setItem('mode', 'dark')
        mode_toggler.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
})

if(localStorage.getItem('mode') == 'dark'){
    root.classList.add('dark')
}