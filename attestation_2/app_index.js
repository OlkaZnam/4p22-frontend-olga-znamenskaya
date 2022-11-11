const button = document.querySelector('[data-js-button]')


function validateEmail(email) {
    let validResult = true
    const emailInput = document.querySelector('[data-js-email-input]')
    const emailError = document.querySelector('[data-js-email-error]')

    if (email.length === 0) {
        emailError.innerHTML = 'Поле обязательно для заполнения'
        validResult = false
    } else {
        emailError.innerHTML = ''
    }

    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validEmail = pattern.test(String(email).toLowerCase());

    if (!validEmail) {
        emailError.innerHTML = 'Email введён некорректно'
        validResult = false
    } else {
        emailError.innerHTML = ''
    }

    if ((email.length === 0) && (!validEmail)) {
        emailError.innerHTML = 'Поле обязательно для заполнения'
    }

    if (!validResult) {
        emailInput.style.borderColor = 'red'
    } else {
        emailInput.style.borderColor = 'grey'
    }

    return validResult
}

function validatePassword(password) {
    const passwordInput = document.querySelector('[data-js-password-input]')
    const passwordError = document.querySelector('[data-js-password-error]')

    let validResult = true
    if (password.trim().length === 0) {
        passwordError.innerHTML = 'Поле обязательно для заполнения'
        validResult = false
    } else {
        passwordError.innerHTML = ''
    }

    if (password.trim().length < 8) {
        passwordError.innerHTML = 'Пароль должен содержать не менее 8 символов'
        validResult = false
    } else {
        passwordError.innerHTML = ''
    }

    if ((password.trim().length === 0) && (password.trim().length < 8)) {
        passwordError.innerHTML = 'Поле обязательно для заполнения'
    }

    if (!validResult) {
        passwordInput.style.borderColor = 'red'
    } else {
        passwordInput.style.borderColor = 'grey'
    }
    return validResult
}

function validate(email, password) {
    let validResult = true

    if (!validateEmail(email))
        validResult = false
    if (!validatePassword(password))
        validResult = false

    return validResult
}

button.addEventListener('click', (event) => {
    event.preventDefault()

    const userEmail = document.querySelector('[data-js-email-input]').value
    const userPassword = document.querySelector('[data-js-password-input]').value

    const validationSuccessful = validate(userEmail, userPassword)
    if (validationSuccessful) {
        return {
            email: userEmail,
            password: userPassword,
        }
    }
})


