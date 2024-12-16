const showSignUp = document.getElementById('showSignUp');
const showLogin = document.getElementById('showLogin');
const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');
const overlay = document.querySelector('.overlay');

showSignUp.addEventListener('click', () => {
    loginContainer.style.transform = 'translateX(-100%)';
    signupContainer.style.transform = 'translateX(0)';
    overlay.style.transform = 'translateX(-100%)';
});

showLogin.addEventListener('click', () => {
    loginContainer.style.transform = 'translateX(0)';
    signupContainer.style.transform = 'translateX(100%)';
    overlay.style.transform = 'translateX(0)';
});
