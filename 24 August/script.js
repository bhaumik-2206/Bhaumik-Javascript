// let url1 = "https://jsonplaceholder.typicode.com/posts";
let randomUserURL = "https://random-data-api.com/api/v2/users?size=10";
let shoppingURL = "https://fakestoreapi.com/products";
async function myData(url) {
    let a = await fetch(url);
    let b = await a.json();
    return b;
}

function starRate(a, id) {
    document.querySelectorAll(`#starParent-${id} i`).forEach((ele, index) => {
        if (index >= Math.round(a)) {
            return;
        } else {
            ele.classList.add('active');
        }
    });
}

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    let a = await myData(shoppingURL);
    let buttons = document.querySelectorAll(".btn");
    console.log(buttons);
    buttons.forEach(ele => {
        ele.addEventListener('click', () => {
            console.log("object");
            document.querySelector('.classic').style.width = "90%";
            document.querySelector('.classic').style.height = "90vh";
        })
    });
});

document.querySelector("form").elements.searchInput.addEventListener("input", async (e) => {
    let a = await myData(shoppingURL);
    document.getElementById('main').innerHTML = "";
    a.forEach(ele => {
        if (ele.category.toLowerCase().includes(e.target.value.toLowerCase().trim())) {
            let des = ele.description;
            let a = des.slice(0, 60) + "...";
            document.getElementById('main').innerHTML += `
            <div class="first">
                <div class="inside">
                    <div class="image">
                        <img src="${ele.image}" alt="">
                    </div>
                    <div class="content">
                        <h2>${ele.category}</h2>
                        <div class="rating">
                            <div class="stars" id="starParent-${ele.id}">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <p class="para">${a}</p>
                        <p class="stock">available Stock :- <span class="stockCount">${ele.rating.count}</span></p>
                        <p class="price">$ ${ele.price}</p>
                        <button class="btn">Buy Now</button>
                    </div>
                </div>
            </div>
            `;
            starRate(ele.rating.rate, ele.id);
        }
    });
})

async function printStocks() {
    let b = await myData(shoppingURL);
    b.forEach(ele => {
        let des = ele.description;
        let a = des.slice(0, 60) + "...";
        document.getElementById('main').innerHTML += `
        <div class="first">
            <div class="inside">
                <div class="image">
                    <img src="${ele.image}" alt="">
                </div>
                <div class="content">
                    <h2>${ele.category}</h2>
                    <div class="rating">
                        <div class="stars" id="starParent-${ele.id}">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <p class="para">${a}</p>
                    <p class="stock">available Stock :- <span class="stockCount">${ele.rating.count}</span></p>
                    <p class="price">$ ${ele.price}</p>
                    <button class="btn">Buy Now</button>
                </div>
            </div>
        </div>
        `;
        starRate(ele.rating.rate, ele.id);
    });
}
printStocks();

