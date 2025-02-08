import {data} from "../data.js"
let arr = JSON.parse(localStorage.DodoPizza)
//<----------------------------------------------------ТОВАРЫ В КОРЗИНЕ----------------------------------------------------------------->
let basketArticles = document.querySelector('.basket-main__basket-articles ')
let basketWindow = document.querySelector('.basket')
let basketLine = document.querySelector('.basket-hr')

let basketAdditionArticles = document.querySelectorAll('.basket-main-addition__articles')

// if(window.innerWidth > 600){
//     basketAdditionArticles = document.querySelector('.basket-main-addition__articles')[0]
//     console.log(basketAdditionArticles);
    
// } else if(window.innerWidth <= 600){
//     basketAdditionArticles = document.querySelector('.basket-main-addition__articles')[1]
//     console.log(basketAdditionArticles);
// }
let price = document.querySelectorAll('.basket-main-result__price_price')
console.log(price);


console.log(arr.length);
//<==========================================================КАРТОЧКИ========================================================================>
let loadingArticles = (el) => {
        let basketArticle = document.createElement('article')
        basketArticle.classList.add('basket__article')
        basketArticle.innerHTML = `
            <div class="basket__article_content">
                <img class="basket__article_img" src="${el.img}" alt="">
                <div class="basket__article_info">
                    <p class="basket__article_info_name">${el.product}</p>
                    <p class="basket__article_info_desc">${el.desc}</p>
                </div>
            </div>
            <div class="basket__second">
                <div class="listener basket__listener">
                    <div onclick="event.stopPropagation()" class="deleteProduct">
                        <div class="elementMinus">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
                                <path d="M9 1L1 1" stroke="#73798C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <p class="amount">${el.amount}</p>
                    <div onclick="event.stopPropagation()" class="addProduct">
                        <div class="elementPlus">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M5 1V9M9 5L1 5" stroke="#73798C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <p class="basket__article_price">${el.price * el.amount} ₽</p>
            </div>
            <div class="basket__delete basket__best">
                <svg class="basket__delete_img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM18 4H15.5L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4Z" fill="#3A3839"/>
                </svg>
            </div>
        `
        basketArticles.appendChild(basketLine)
        basketArticles.appendChild(basketArticle)
}
for(let i = 0; i < arr.length; i++){
    loadingArticles(arr[i])
}

for(let i = 0; i < data.addition.length; i++){
    let basketAdditionArticle = document.createElement('article')
    basketAdditionArticle.classList.add('basket-main-addition__article')
    basketAdditionArticle.innerHTML = `
        <img class="basket-main-addition__article_img" src="${data.addition[i].img}" alt="">
        <div class="basket-main-addition__article-div">
            <p class="basket-main-addition__article-div_text">${data.addition[i].desc}</p>
            <button class="basket-main-addition__article-div_button snacks__article_info_price_button">${data.addition[i].price} ₽</button>
        </div>
    `
    if(window.innerWidth > 600){
        basketAdditionArticles[0].appendChild(basketAdditionArticle)
    }else if(window.innerWidth <= 600){
        basketAdditionArticles[1].appendChild(basketAdditionArticle)
    }
    
}

//<===========================================КНОПКА ДОБАВЛЕНИЯ К ЗАКАЗУ========================================================================>
let additionButton = document.querySelectorAll('.basket-main-addition__article-div_button')
let check = false
for(let el of additionButton){
    el.addEventListener('click', () => {
        
        for(let i = 0; i < arr.length; i++){
            if( el.parentElement.children[0].textContent === arr[i].product){
                arr[i].amount = +arr[i].amount + 1
                localStorage.setItem("DodoPizza", JSON.stringify(arr))
                
                check = true
                let amount = document.querySelectorAll('.amount')
                for(let el of amount){
                    if(el.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent === arr[i].product){
                        el.textContent = arr[i].amount
                        el.parentElement.parentElement.children[1].textContent = `${arr[i].amount * arr[i].price} ₽`
                        
                    }
                }
            }
        }
        console.log(check);
        
        if(check === false){
            arr.push({"product": el.parentElement.children[0].textContent,"desc": '', "img": el.parentElement.parentElement.children[0].src , "amount": 1, "price": el.textContent.split(' ')[0]})
            localStorage.setItem("DodoPizza", JSON.stringify(arr))
            loadingArticles(arr[arr.length-1])
        }

        addProduct = document.querySelectorAll('.addProduct')
        deleteProduct = document.querySelectorAll('.deleteProduct')
        articleBasket = document.querySelectorAll('.basket__delete')
        
        for(let el of articleBasket){
            articleBasketFunction(el)
        }
        for(let el of addProduct){
            addProductFunction(el)
        }
        for(let el of deleteProduct){
            deleteProductFunction(el)
        }
        remakePrice()
    })
}

let remakePrice = () => {
    console.log('hgfd');
    let sumPrice = 0
    for(let i = 0; i < arr.length; i++){  
        // price.textContent = +el.textContent.split(' ')[0]
        sumPrice = +sumPrice  + (+arr[i].amount * +arr[i].price)
    }
    if(window.innerWidth > 600){
        price[0].textContent = sumPrice + ' ₽'
    } else if(window.innerWidth <= 600){
        price[1].textContent = sumPrice + ' ₽'
    }
    
    // price.textContent = `${price.textContent} ₽`
}
remakePrice()
//<=======================================================ДОБАВЛЕНИЕ,УДАЛЕНИЕ,КОРЗИНА КАРТОЧЕК========================================>
let addProduct = document.querySelectorAll('.addProduct')
let deleteProduct = document.querySelectorAll('.deleteProduct')
let articleBasket = document.querySelectorAll('.basket__delete')

let articleBasketFunction = (el) => {
    el.addEventListener('click', () => {
        for(let i = 0; i < arr.length; i++){
            if(el.parentElement.children[0].children[1].children[0].textContent === arr[i].product){
                el.parentElement.style.display = 'none'
                let filter = arr
                arr = filter.filter(arr => arr.product !== el.parentElement.children[0].children[1].children[0].textContent)
                localStorage.setItem("DodoPizza", JSON.stringify(arr))
            }
        }
        remakePrice()
    })
}

for(let el of articleBasket){
    articleBasketFunction(el)
}
    
let addProductFunction = (el) => {
    el.addEventListener('click', () => {
        console.log('плюс');
        console.log(el.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent);
        for(let i = 0; i<arr.length; i++){
            if(arr[i].product === el.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent){
                arr[i].amount = +arr[i].amount + 1
                el.parentElement.children[1].textContent = arr[i].amount
                el.parentElement.parentElement.children[1].textContent = `${arr[i].amount * arr[i].price} ₽`
                localStorage.setItem("DodoPizza", JSON.stringify(arr))
            }
        }
        remakePrice()
    })
}
for(let el of addProduct){
    addProductFunction(el)
}

let deleteProductFunction = (el) => {
    el.addEventListener('click', () => {
        console.log('минус');
        for(let i = 0; i<arr.length; i++){
            if(arr[i].product === el.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent){
                arr[i].amount = +arr[i].amount - 1
                el.parentElement.children[1].textContent = arr[i].amount
                el.parentElement.parentElement.children[1].textContent = `${arr[i].amount * arr[i].price} ₽`
                localStorage.setItem("DodoPizza", JSON.stringify(arr))

                if(+el.parentElement.children[1].textContent === 0){
                    el.parentElement.parentElement.parentElement.style.display = 'none'
                    let filter = arr
                    arr = filter.filter(arr => arr.amount !== 0)
                    localStorage.setItem("DodoPizza", JSON.stringify(arr))
                }
            }
        }
        remakePrice()
    })
}
for(let el of deleteProduct){
    deleteProductFunction(el)
}