let input = document.getElementById('input');
let generate = document.getElementById('generate');
function randomPassword() {
    let password = "";
    for (let i = 0; i <= 10; i++) {
        let store = Math.round(Math.random() * 100);
        if (store < 35) {
            password += store;
        } else {
            password += String.fromCharCode(store);
        }
    }
    input.value = password;
}
generate.addEventListener('click', randomPassword);


// Page is reload in button
// let generate1 = document.getElementById('generate1');
// generate1.addEventListener('click', randomPassword);