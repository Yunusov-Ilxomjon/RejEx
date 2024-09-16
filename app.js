// regEX
const regEXforlogin = /^[a-zA-Z0-9]{8,14}$/
const regEXForparol = /^[0-9]{8,12}$/
const regEXforemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// inputlar
const login = document.getElementById("login")
const parol = document.getElementById('parol')
const email = document.getElementById('email')

const btn = document.getElementById('btn')

// h1
const info = document.getElementById('info')

// h3 lar
const hlogin = document.getElementById('h-login')
const hparol = document.getElementById('h-parol')
const hemail = document.getElementById('h-email')

// shu joyigacha deyarli mustaqil o'zim tayyorladim, qolganini ko'rib o'rgandim

login.addEventListener("keyup", () => {
    if (regEXforlogin.test(login.value)) {
        hlogin.innerHTML = login.value + ": Correct"
        // login.style.animation='none'
        hlogin.style.color = 'green'
        login.style.backgroundColor = 'green'
        login.classList.add('inputt')

    }

    else if (login.value == "") {
        hlogin.innerHTML = ""

        hlogin.style.color = 'black'
        login.classList.remove('inputt')
        login.style.backgroundColor = 'white'
    }

    else {
        hlogin.innerHTML = login.value + ": Inorrect"
        login.style.animation
        hlogin.style.color = 'red'
        login.style.backgroundColor = 'red'
    }


    event.preventDefault()
})


parol.addEventListener("keyup", () => {
    if (regEXForparol.test(parol.value)) {
        hparol.innerHTML = login.value + ": Correct"
        // login.style.animation='none'
        hparol.style.color = 'green'
        parol.style.backgroundColor = 'green'
        parol.classList.add('inputt')

    }

    else if (parol.value == "") {
        hparol.innerHTML = ""

        hparol.style.color = 'black'
        parol.classList.remove('inputt')
        parol.style.backgroundColor = 'white'
    }

    else {
        hparol.innerHTML = parol.value + ": Inorrect"
        parol.style.animation
        hparol.style.color = 'red'
        parol.style.backgroundColor = 'red'
    }


    event.preventDefault()
})



email.addEventListener("keyup", () => {
    if (regEXforemail.test(email.value)) {
        hemail.innerHTML = email.value + ": Correct"
        // login.style.animation='none'
        hemail.style.color = 'green'
        email.style.backgroundColor = 'green'
        email.classList.add('inputt')

    }

    else if (email.value == "") {
        hemail.innerHTML = ""

        hemail.style.color = 'black'
        email.classList.remove('inputt')
        email.style.backgroundColor = 'white'
    }

    else {
        hemail.innerHTML = email.value + ": Inorrect"
        login.style.animation
        hemail.style.color = 'red'
        email.style.backgroundColor = 'red'
    }


    event.preventDefault()
})

btn.addEventListener("click", () => {

    if (regEXforlogin.test(login.value) && regEXForparol.test(parol.value) && regEXforemail.test(email.value)) {
        // info.classList.remove('hide')
        info.classList.add('show')
        info.classList.remove('hide')
        info.innerHTML = 'Logged in successfully'
    }

    // else if (regEXforlogin.test(login.value == "") || regEXForparol.test(parol.value == "") || regEXforemail.test(email.value == ""))
    // info.classList.add('inform')
    // info.innerHTML = "Maydonlarni to'ldiring"

    else {
        info.classList.add('hide')
        info.classList.remove('show')
        info.innerHTML = 'Logged in unsuccessfully'
    }

    event.preventDefault()
})