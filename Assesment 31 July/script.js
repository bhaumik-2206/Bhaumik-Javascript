let promoInput = document.getElementById('promoInput');
let amount = document.getElementById('amount');
let check = document.getElementById('check');
let getAmount = document.getElementById('getAmount');
let total = document.getElementById('total');
let mainTotal = document.getElementById('mainTotal');
let green = document.getElementById('green');
let red = document.getElementById('red');

amount.addEventListener('blur', function () {
    if (amount.value != 0) {
        let price = Number(amount.value);
        getAmount.innerHTML = amount.value;
        total.innerHTML = price + (price * 18) / 100;
        mainTotal.innerHTML = price + (price * 18) / 100;
    }
});

check.addEventListener('click', function () {
    calculateDiscount();
});

promoInput.addEventListener('input', function () {
    if (promoInput.value.trim() != "") {
        check.disabled = false;
        check.style.backgroundColor = "rgb(255, 62, 94)";
    } else {
        check.disabled = true;
        check.style.backgroundColor = "";
        total.innerHTML = Number(amount.value) + (amount.value * 18) / 100
        mainTotal.innerHTML = Number(amount.value) + (amount.value * 18) / 100;
    }
});

function calculateDiscount() {
    let promoCode = ["off25", "off50", "off75"];
    let discountPrice = [25, 50, 75];
    let discount = promoInput.value.toLowerCase().split(" ").filter(Boolean).join("");
    let priceAfterGST = (Number(amount.value) + (amount.value * 18) / 100);
    if (amount.value >= 500 && amount.value < 2000) {
        if (discount == 'off25') {
            index = promoCode.findIndex(e => e == discount);
            displayApplied();
            total.innerHTML = `<span>(-25%)</span> ${priceAfterGST - (priceAfterGST * discountPrice[index]) / 100}`;
            mainTotal.innerHTML = Math.round(priceAfterGST - (priceAfterGST * discountPrice[index]) / 100);
        } else {
            red.style.display = "block";
            red.innerHTML = "Please Try OFF 25 coupon";
            green.style.display = "none";
        }
    } else if (amount.value >= 2000 && amount.value <= 4000) {
        if (discount == 'off25' || discount == 'off50') {
            index = promoCode.findIndex(e => e == discount);
            displayApplied();
            total.innerHTML = `<span>(-25%)</span> ${priceAfterGST - (priceAfterGST * discountPrice[index]) / 100}`;
            mainTotal.innerHTML = Math.round(priceAfterGST - (priceAfterGST * discountPrice[index]) / 100);
        } else {
            red.style.display = "block";
            red.innerHTML = "Please Try OFF 25 and OFF 50 coupon";
            green.style.display = "none";
        }
    } else if (amount.value > 4000) {
        if (discount == 'off25' || discount == 'off50' || discount == "off75") {
            index = promoCode.findIndex(e => e == discount);
            displayApplied();
            total.innerHTML = `<span>(-25%)</span> ${priceAfterGST - (priceAfterGST * discountPrice[index]) / 100}`;
            mainTotal.innerHTML = Math.round(priceAfterGST - (priceAfterGST * discountPrice[index]) / 100);
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
}

function displayApplied() {
    green.style.display = "block";
    green.innerHTML = "Offer Applied";
    red.style.display = "none";
}


// function calculateDiscount() {
//     let promoCode = ["off25", "off50", "off75"];
//     let discountPrice = [25, 50, 75];
//     let discount = promoInput.value.toLowerCase().split(" ").filter(Boolean).join("");
//     let priceAfterGST = (Number(amount.value) + (amount.value * 18) / 100);
//     if (amount.value >= 500 && amount.value < 2000) {
//         if (discount == 'off25') {
//             displayApplied();
//             total.innerHTML = `<span>(-25%)</span> ${priceAfterGST - (priceAfterGST * 25) / 100}`;
//             mainTotal.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 25) / 100);
//         } else {
//             red.style.display = "block";
//             red.innerHTML = "Please Try OFF 25 coupon";
//             green.style.display = "none";
//         }
//     } else if (amount.value >= 2000 && amount.value <= 4000) {
//         if (discount == 'off25') {
//             displayApplied();
//             total.innerHTML = `<span>(-25%)</span> ${priceAfterGST - (priceAfterGST * 25) / 100}`;
//             mainTotal.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 25) / 100);
//         } else if (discount == 'off50') {
//             displayApplied();
//             total.innerHTML = `<span>(-50%)</span> ${priceAfterGST - (priceAfterGST * 50) / 100}`;
//             mainTotal.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 50) / 100);
//         } else {
//             red.style.display = "block";
//             red.innerHTML = "Please Try OFF 25 and OFF 50 coupon";
//             green.style.display = "none";
//         }
//     } else if (amount.value > 4000) {
//         if (discount == 'off25') {
//             displayApplied();
//             total.innerHTML = `<span>(-25%)</span> ${priceAfterGST - (priceAfterGST * 25) / 100}`;
//             mainTotal.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 25) / 100);
//         } else if (discount == 'off50') {
//             displayApplied();
//             total.innerHTML = `<span>(-50%)</span> ${priceAfterGST - (priceAfterGST * 50) / 100}`;
//             mainTotal.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 50) / 100);
//         } else if (discount == 'off75') {
//             displayApplied();
//             total.innerHTML = `<span>(-75%)</span> ${(priceAfterGST - (priceAfterGST * 75) / 100).toFixed(2)}`;
//             mainTotal.innerHTML = Math.round(priceAfterGST - (priceAfterGST * 75) / 100);
//         } else {
//             red.style.display = "block";
//             red.innerHTML = "Your coupon is Not Working";
//             green.style.display = "none";
//         }
//     } else {
//         red.style.display = "block";
//         red.innerHTML = "Please buy more than 500 RS to use the coupon";
//         green.style.display = "none";
//     }
// }
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