function validate(email, password) {
    let validResult = true

    if (!validateEmail(email))
        validResult = false
    if (!validatePassword(password))
        validResult = false

    return validResult
}

const button = document.querySelector('[data-js-button]')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const userEmail = document.querySelector('[data-js-email-input]').value
    const userPassword = document.querySelector('[data-js-password-input]').value

    const validationSuccessful = validate(userEmail, userPassword)
    if (validationSuccessful) {
        console.log( {
            email: userEmail,
            password: userPassword,
        })
        return {
            email: userEmail,
            password: userPassword,
        }
    }
})


