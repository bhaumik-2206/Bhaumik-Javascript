// let array = [];
// async function addingInArray() {
//     let a = await fetch("https://restcountries.com/v3.1/all");
//     let b = await a.json();
//     b.forEach(ele => {
//         array.push(ele.name.common);
//     });
// }
// addingInArray();

// let clicked = false;
// async function giveSuggestion(value) {
//     clicked = false;
//     document.getElementById('suggestion').innerHTML = "";
//     if (value != "") {
//         array.forEach(ele => {
//             if (ele.toLowerCase().includes(value)) {
//                 document.getElementById('suggestion').style.display = "block";
//                 let newEle = document.createElement('p');
//                 newEle.innerText = ele;
//                 newEle.addEventListener("click", () => {
//                     document.getElementById("form").elements.searchForCountry.value = ele;
//                     suggestion.style.display = "none";
//                     clicked = true;
//                 });
//                 document.getElementById('suggestion').appendChild(newEle);
//             }
//         });
//     }
// }
// document.getElementById('form').elements.searchForCountry.addEventListener('input', (e) => {
//     giveSuggestion(e.target.value.toLowerCase().trim());
// });
// document.getElementById('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     myFunc(e.target.searchForCountry.value);
// });

// Weather API
// const apiKey = `3265874a2c77ae4a04bb96236a642d2f`;
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
// async function checkWeather(city) {
//     let a = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
//     let b = await a.json();
//     console.log(`Temperature of ${city} is ${b.main.temp} , Wind speed is ${b.wind.speed} , Weather is ${b.weather[0].main}(${b.weather[0].description})`);
//     console.log(`Maximum Temprasor: ${b.main.temp_max}`);
//     console.log(`Minimum Temprasor: ${b.main.temp_min}`);
//     console.log(b);
// }
// checkWeather("bangladesh");

// Get random user GitHub ID
async function randomUserGitHubId() {
    let a = await fetch(`https://api.github.com/users`);
    let b = await a.json();
    let randomNumber = Math.floor(Math.random() * 30);
    document.getElementById('randomGitHub').innerHTML = `
        <h1><a href="${b[randomNumber].html_url}" target="_blank">Random GitHub Page</a></h1>
    `;
}
randomUserGitHubId();

// Get random Place suggestion for tour
async function randomTourPlaces() {
    try {
        let a = await fetch(`https://www.course-api.com/react-tours-project`);
        let b = await a.json();
        let randomNumber = Math.floor(Math.random() * (b.length - 1));
        document.getElementById('answer').style.display = 'flex';
        document.getElementById('answer').innerHTML = `
            <div class="left">
                <h1>${b[randomNumber].name}</h1>
                <p>${b[randomNumber].info}</h2>
                <h2>Budget :- ${b[randomNumber].price}</h2>
            </div>
            <div class="right">
                <img src="${b[randomNumber].image}" alt="">
            </div>
            `;
    } catch (error) {
        console.log("ERROR");
    }
}

document.getElementById('findTour').addEventListener('click', (e) => {
    randomTourPlaces();
});

// Get random 9 image from API and
async function randomImage() {
    let url = await fetch('https://picsum.photos/v2/list');
    let b = await url.json();
    document.getElementById('randomImage').innerHTML = `
        <div class="img"><img src="${b[randomNumber(b)].download_url}" alt=""></div>
        <div class="img"><img src="${b[randomNumber(b)].download_url}" alt=""></div>
        <div class="img"><img src="${b[randomNumber(b)].download_url}" alt=""></div>
        <div class="img"><img src="${b[randomNumber(b)].download_url}" alt=""></div>
        <div class="img"><img src="${b[randomNumber(b)].download_url}" alt=""></div>
        <div class="img"><img src="${b[randomNumber(b)].download_url}" alt=""></div>
        <div class="img"><img src="${b[randomNumber(b)].download_url}" alt=""></div>
        <div class="img"><img src="${b[randomNumber(b)].download_url}" alt=""></div>
        <div class="img"><img src="${b[randomNumber(b)].download_url}" alt=""></div>
    `;
}
function randomNumber(b) {
    return Math.floor(Math.random() * (b.length - 1));
}
randomImage();



// https://reqres.in/api/users