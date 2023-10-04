const credentials = {
    login: 'admin',
    password: 'qwerty',
}

const checkLogin = (event) => {
    event.preventDefault();

    const loginInput = document.querySelector('#login');
    const passwordInput = document.querySelector('#password');
    const resultDiv = document.querySelector('#result');
    console.log(loginInput, passwordInput, resultDiv)

    if (loginInput.value === credentials.login && passwordInput.value === credentials.password) {
        resultDiv.textContent = 'Успех! Поздравляем';
        resultDiv.className = 'success-message';
        console.log('true')
    }

    else {
        resultDiv.textContent = 'Ошибка! Неправильный логин или пароль';
        resultDiv.className = 'error-message';
        console.log('false')
    }
}
