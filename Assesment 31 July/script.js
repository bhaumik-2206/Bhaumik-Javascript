let promoInput = document.getElementById('promoInput');
let amount = document.getElementById('amount');
let check = document.getElementById('check');
let getAmount = document.getElementById('getAmount');
let total = document.getElementById('total');
let total1 = document.getElementById('total1');
let form = document.getElementById('form');
let green = document.getElementById('green');
let red = document.getElementById('red');

amount.addEventListener('blur', function () {
    let price = Number(amount.value);
    getAmount.innerHTML = amount.value;
    total.innerHTML = price + (price * 18) / 100;
});

check.addEventListener('click', function () {
    calculateDiscount();
});

function calculateDiscount() {
    let discount = promoInput.value.toLowerCase().split(" ").filter(Boolean).join("");
    let priceAfterGST = (Number(amount.value) + (amount.value * 18) / 100);
    if (amount.value >= 500 && amount.value < 2000) {
        if (discount == 'off25') {
            displayApplied();
            total.innerHTML = `<span>(-25%)</span> ${priceAfterGST - (priceAfterGST * 25) / 100}`;
            total1.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 25) / 100);
        } else {
            red.style.display = "block";
            red.innerHTML = "Please Try OFF 25 coupon";
            green.style.display = "none";
        }
    } else if (amount.value >= 2000 && amount.value <= 4000) {
        if (discount == 'off25') {
            displayApplied();
            total.innerHTML = `<span>(-25%)</span> ${priceAfterGST - (priceAfterGST * 25) / 100}`;
            total1.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 25) / 100);
        } else if (discount == 'off50') {
            displayApplied();
            total.innerHTML = `<span>(-50%)</span> ${priceAfterGST - (priceAfterGST * 50) / 100}`;
            total1.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 50) / 100);
        } else {
            red.style.display = "block";
            red.innerHTML = "Please Try OFF 25 and OFF 50 coupon";
            green.style.display = "none";
        }
    } else if (amount.value > 4000) {
        if (discount == 'off25') {
            displayApplied();
            total.innerHTML = `<span>(-25%)</span> ${priceAfterGST - (priceAfterGST * 25) / 100}`;
            total1.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 25) / 100);
        } else if (discount == 'off50') {
            displayApplied();
            total.innerHTML = `<span>(-50%)</span> ${priceAfterGST - (priceAfterGST * 50) / 100}`;
            total1.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 50) / 100);
        } else if (discount == 'off75') {
            displayApplied();
            total.innerHTML = `<span>(-75%)</span> ${priceAfterGST - (priceAfterGST * 75) / 100}`;
            total1.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 75) / 100);
        } else {
            red.style.display = "block";
            red.innerHTML = "Your coupon is Not Working";
            green.style.display = "none";
        }
    } else {
        red.style.display = "block";
        red.innerHTML = "Please buy more than 500 RS to use the coupon";
        green.style.display = "none";
    }
    // console.log(total.textContent.slice(7));
    // total.innerHTML = Number(total.textContent.slice(7)).toPrecision(4);
}
function displayApplied() {
    green.style.display = "block";
    green.innerHTML = "Offer Applied";
    red.style.display = "none";
}
// form.addEventListener('focus', function () {
//     check.disabled = false;
//     check.style.backgroundColor = "rgb(255, 62, 94)";
// });

// form.addEventListener('blur', function () {
//     check.disabled = true;
//     check.style.backgroundColor = "rgb(255, 192, 202)";
// });

// promoInput.addEventListener('focus', function () {
//     check.disabled = true;
// });