document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if (userEmail == 'tareq@lpu.com' && userPassword == '123456') {
        window.location.href = 'banking.html';
    }
    else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';

    }

});