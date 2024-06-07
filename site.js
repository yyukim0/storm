document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');
    const passwordInput = document.querySelector('#password');
    const errorMessage = document.querySelector('#error-message');
    const nicknameInput = document.querySelector('#nickname');


    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if(passwordInput.value === 'Pikachuvoador') {
            window.location.href = "artwork.html";
            localStorage.setItem('nickname', nicknameInput.value)
        }
        else {
            errorMessage.style.display = 'block';
        }
    });
});