
// login email
document.getElementById('input-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-login');
    const userEmail = emailField.value
    // console.log(userEmail);
    // login password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    if (userEmail == 'akilinjamam@gmail.com' && userPassword == 'dreams') {
        // console.log('yes this is valid')
        window.location.href = 'banking.html'
    }

    else {
        console.log('please give a valid user id password')
    }
})



