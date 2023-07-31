let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    let em = email.value;
    let pass = password.value;
    alert("Email is :-" + em + "\nPassword is :-" + pass);
});