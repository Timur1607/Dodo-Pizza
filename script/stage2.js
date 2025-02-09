import {data} from "../data.js"
let arr = JSON.parse(localStorage.DodoPizza)
// let localStorage = window.localStorage
let info = []
//<----------------------------------------------ПРОГРУЗКА КАРТОЧЕК И ЦЕНА--------------------------------------------------->
let checkArticles = document.querySelector('.stage2-main__check_articles')
for(let i = 0; i < arr.length; i++){
    let checkArticle = document.createElement('article')
    checkArticle.classList.add('stage2-main__check_article')
    checkArticle.innerHTML = `
        <div class="stage2-main__check_article_div">
            <p class="stage2-main__check_article_div_name">${arr[i].product}</p>
            <p class="stage2-main__check_article_div_amount">${arr[i].amount} шт</p>
        </div>
        <p class="stage2-main__check_article_price"><span class="stage2-main__check_article_price_amount">${arr[i].amount} ×</span> ${arr[i].price} ₽</p>
    `
    checkArticles.appendChild(checkArticle)
}

let span = document.querySelectorAll('.stage2-main__check_article_price_amount')
let price = document.querySelector('.stage2-main__check_footer_right')
let priceInButton = document.querySelectorAll('.stage-2__button_next')
for(let i = 0; i < arr.length; i++){
    if(arr[i].amount === 1){
        span[i].textContent = ''
    }

    price.textContent = +price.textContent + (arr[i].price * arr[i].amount)
}
price.textContent = `${price.textContent} ₽`
if(window.innerWidth > 600){
    priceInButton[0].textContent = `Оформить заказ на ${price.textContent}`
} else if(window.innerWidth <= 600){
    priceInButton[1].textContent = `Оформить заказ на ${price.textContent}`
}

//<----------------------------------------------------------ФОРМА--------------------------------------------------------------------->


let buttonForm = document.querySelector('.stage2-main__form')
buttonForm.addEventListener('submit', (event) => {
    event.preventDefault()
    info.push({"name":`${name.value}` , "number": `${number.value}`, "address": `${address.value}`})
    localStorage.setItem("information", JSON.stringify(info))
})
let name = document.querySelector('.stage2-main__form-title_name-input')
let number = document.querySelector('.stage2-main__form-title_number-input')
let address = document.querySelector('.stage2-main__form-title_address-input')
console.log(name.value);
console.log(number.value);
console.log(address.value);

localStorage.setItem("information", JSON.stringify(info))

let button = document.querySelectorAll('.stage-2__button')
console.log(button);

// if(innerWidth > 600){
//     button = document.querySelectorAll('stage-2__button')[0]
// } else if(innerWidth <= 600){
//     button = document.querySelectorAll('stage-2__button')[1]
// }

button[(innerWidth > 600 ? 0 : 1)].addEventListener('click', (event) => {
    if(name.value === '' || number.value === '' || address.value === ''){
        event.preventDefault()
        console.log("да");
        if(name.value === ''){
            name.classList.add('forPlaceholder')
            name.placeholder = 'Введите ваше имя!'
        }
        if(number.value === ''){
            number.classList.add('forPlaceholder')
            number.placeholder = 'Введите ваш номер!'
        }
        if(address.value === ''){
            address.classList.add('forPlaceholder')
            address.placeholder = 'Введите ваш адрес!'
        }
    }
    if(name.value !== '' || number.value !== '' || address.value !== ''){
        info.push({"name":`${name.value}` , "number": `${number.value}`, "address": `${address.value}`})
        localStorage.setItem("information", JSON.stringify(info))
    }
})
