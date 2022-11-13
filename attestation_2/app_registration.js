function validatePasswordConfirmation(password, passwordConfirmation) {
    const passwordConfirmationInput = document.querySelector('[data-js-password-confirmation-input]')
    const passwordConfirmationError = document.querySelector('[data-js-password-confirmation-error]')
    let validResult = true

    if (password !== passwordConfirmation) {
        passwordConfirmationError.innerHTML = 'Пароли не совпадают'
        validResult = false
    } else {
        passwordConfirmationError.innerHTML = ''
    }

    if (!validResult) {
        passwordConfirmationInput.style.borderColor = 'red'
    } else {
        passwordConfirmationInput.style.borderColor = 'grey'
    }

    return validResult
}

function validate(email, password, passwordConfirm) {
    let validResult = true

    if (!validateEmail(email))
        validResult = false
    if (!validatePassword(password))
        validResult = false
    if (!validatePasswordConfirmation(password, passwordConfirm))
        validResult = false

    return validResult
}

const button = document.querySelector('[data-js-button]')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const userEmail = document.querySelector('[data-js-email-input]').value
    const userPassword = document.querySelector('[data-js-password-input]').value
    const userPasswordConfirmation = document.querySelector('[data-js-password-confirmation-input]').value

    let gender
    if (document.querySelector('[data-js-radio]:checked') !== null) {
        gender = document.querySelector('[data-js-radio]:checked').value
    }

    const aboutUser = document.querySelector('[data-js-textarea]').value

    let subscribeAgreement
    if (document.querySelector('[data-js-checkbox-input]:checked') !== null) {
        subscribeAgreement = document.querySelector('[data-js-checkbox-input]:checked').value
    } else {
        subscribeAgreement = 'no'
    }

    const validationSuccessful = validate(userEmail, userPassword, userPasswordConfirmation)
    if (validationSuccessful) {
        console.log({
            email: userEmail,
            password: userPassword,
            gender: gender,
            aboutUser: aboutUser,
            subscribeAgreement: subscribeAgreement
        })
        return {
            email: userEmail,
            password: userPassword,
            gender: gender,
            aboutUser: aboutUser,
            subscribeAgreement: subscribeAgreement
        }
    }
})


