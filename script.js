import {data} from "./data.js"

let localStorage = window.localStorage
let arr = []
// <-----------------------------------------------------НОВИНКИ----------------------------------------------------------->
let newsArticles = document.querySelector('.news__articles')
if(window.innerWidth <= 630){
    newsArticles = document.querySelector('.news__articles_630px')
    // console.log('yes');
}
for(let el of data.news){
    let newsArticle = document.createElement('article')
    newsArticle.classList.add('news__article')

    newsArticle.innerHTML = `
        <img class="news__article_img" src="${el.img}" alt="картина пиццы">
        <div class="news__article_info">
            <p class="news__article_info_name">${el.name}</p>
            <p class="news__article_info_price">от ${el.price} ₽</p>
        </div>
    `
   
    newsArticles.appendChild(newsArticle)
}
// <---------------------------------------------------ПИЦЦА------------------------------------------------------------------>
let pizzaArticles = document.querySelector('.pizza__articles')
let pizzaCheck = null

for(let el of data.pizza){
    let pizzaHr = document.createElement('hr')
    let pizzaArticle = document.createElement('article')
    pizzaArticle.classList.add('pizza__article')
    pizzaHr.classList.add('pizza__hr')

    pizzaArticle.innerHTML = `
        <img class="pizza__article_picture" src="${el.img}" alt="фото пиццы">
        <div class="pizza__article_info">
            <p class="pizza__article_info_name">${el.name}</p>
            <p class="pizza__article_info_composition">${el.composition}</p>
            <div class="pizza__article_info_price">
                <p class="pizza__article_info_price_price" style="${innerWidth <= 330 ? 'display: none' : ''}">от ${el["minimal-price"]} ₽</p>
                <button class="pizza__article_info_price_button_create" style="${el.assembly !== true ? 'display: none' : ''}">${innerWidth <= 330 ? `от ${el["minimal-price"]} ₽`: 'Собрать'}</button>
                <button class="pizza__article_info_price_button" style="${el.assembly !== true ? '' : 'display: none'}">${innerWidth <= 330 ? `от ${el["minimal-price"]} ₽`: 'Выбрать'}</button>
            </div>
        </div>
    `

    if(pizzaCheck >= 1  && innerWidth<= 511){
        pizzaArticles.appendChild(pizzaHr)
    }
    pizzaArticles.appendChild(pizzaArticle)
    
    pizzaCheck += 1
}

//<------------------------------------------------------КОМБО------------------------------------------------------------------------->
let comboArticles = document.querySelector('.combo__articles')
let comboCheck = null

for(let el of data.combo){
    let comboHr = document.createElement('hr')
    let comboArticle = document.createElement('article')
    comboArticle.classList.add('combo__article')
    comboHr.classList.add('combo__hr')

    comboArticle.innerHTML = `
        <img class="combo__article_picture" src="${el.img}" alt="фото пиццы">
        <div class="combo__article_info">
            <p class="combo__article_info_name">${el.name}</p>
            <p class="combo__article_info_composition">${el.description}</p>
            <div class="combo__article_info_price">
                <p class="combo__article_info_price_price" style="${innerWidth <= 330 ? 'display: none' : ''}">от ${el["price"]} ₽</p>
                <button onclick="event.stopPropagation()" class="combo__article_info_price_button_create">${innerWidth <= 330 ? `${el["price"]} ₽`: 'Собрать'}</button>
            </div>
        </div>
    `

    if(comboCheck >= 1  && innerWidth<= 511){
        comboArticles.appendChild(comboHr)
    }
    comboArticles.appendChild(comboArticle)
    
    comboCheck += 1
}
//<------------------------------------------------------------ЗАКУСКИ------------------------------------------------------------------>
let snacksArticles = document.querySelector('.snacks__articles')
let snacksCheck = null

for(let el of data.snacks){
    let snacksHr = document.createElement('hr')
    let snacksArticle = document.createElement('article')
    snacksArticle.classList.add('snacks__article')
    snacksArticle.id = 'basicProduct'
    snacksHr.classList.add('snacks__hr')

    snacksArticle.innerHTML = `
        <img class="snacks__article_picture" src="${el.img}" alt="фото пиццы">
        <div class="snacks__article_info">
            <div>
                <p class="snacks__article_info_name">${el.name}</p>
                <p class="snacks__article_info_composition">${el.description}</p>
            </div>
            <div class="snacks__article_info_price">
                <p class="snacks__article_info_price_price" style="${innerWidth <= 330 ? 'display: none' : ''}">${el["price"]} ₽</p>
                <button onclick="event.stopPropagation()" class="snacks__article_info_price_button basicProduct" style="${el.assembly === true ? 'display: none' : ''}">${innerWidth <= 330 ? `${el["price"]} ₽`: 'В корзину'}</button>
                <div class="listener">
                    <div onclick="event.stopPropagation()" class="deleteProduct">
                        <div class="elementMinus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
                                <path d="M9 1L1 1" stroke="#73798C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </div>
                    </div>
                    <p class="amount">0</p>
                    <div onclick="event.stopPropagation()" class="addProduct">
                        <div class="elementPlus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M5 1V9M9 5L1 5" stroke="#73798C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    if(snacksCheck >= 1  && innerWidth<= 511){
        snacksArticles.appendChild(snacksHr)
    }
    snacksArticles.appendChild(snacksArticle)
    
    snacksCheck += 1
}
//<----------------------------------------------------------ДЕСЕРТЫ---------------------------------------------------------------->
let dessertsArticles = document.querySelector('.desserts__articles')
let dessertsCheck = null

for(let el of data.desserts){
    let dessertsHr = document.createElement('hr')
    let dessertsArticle = document.createElement('article')
    dessertsArticle.classList.add('desserts__article')
    dessertsArticle.id = 'basicProduct'
    dessertsHr.classList.add('desserts__hr')

    dessertsArticle.innerHTML = `
        <img class="desserts__article_picture" src="${el.img}" alt="">
        <div class="desserts__article_info">
            <div>
                <p class="desserts__article_info_name">${el.name}</p>
                <p class="desserts__article_info_composition">${el.description}</p>
            </div>
            <div class="desserts__article_info_price">
                <p class="desserts__article_info_price_price" style="${innerWidth <= 330 ? 'display: none' : ''}">${el["price"]} ₽</p>
                <button onclick="event.stopPropagation()" class="desserts__article_info_price_button basicProduct" style="${el.assembly === true ? 'display: none' : ''}">${innerWidth <= 330 ? `${el["price"]} ₽`: 'В корзину'}</button>
                <div class="listener">
                    <div onclick="event.stopPropagation()" class="deleteProduct">
                        <div class="elementMinus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
                                <path d="M9 1L1 1" stroke="#73798C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </div>
                    </div>
                    <p class="amount">0</p>
                    <div onclick="event.stopPropagation()" class="addProduct">
                        <div class="elementPlus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M5 1V9M9 5L1 5" stroke="#73798C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    if(dessertsCheck >= 1  && innerWidth<= 511){
        dessertsArticles.appendChild(dessertsHr)
    }
    dessertsArticles.appendChild(dessertsArticle)
    
    dessertsCheck += 1
}
//<------------------------------------------------------НАПИТКИ----------------------------------------------------------------------->
let drinksArticles = document.querySelector('.drinks__articles')
let drinksCheck = null

for(let el of data.drinks){
    let drinksHr = document.createElement('hr')
    let drinksArticle = document.createElement('article')
    drinksArticle.classList.add('drinks__article')
    drinksArticle.id = 'basicProduct'
    drinksHr.classList.add('drinks__hr')

    drinksArticle.innerHTML = `
        <img class="drinks__article_picture" src="${el.img}" alt="">
        <div class="drinks__article_info">
            <div>
                <p class="drinks__article_info_name">${el.name}</p>
                <p class="drinks__article_info_composition">${el.description}</p>
            </div>
            <div class="drinks__article_info_price">
                <p class="drinks__article_info_price_price" style="${innerWidth <= 330 ? 'display: none' : ''}">${el["price"]} ₽</p>
                <button onclick="event.stopPropagation()" class="drinks__article_info_price_button basicProduct" style="${el.assembly === true ? 'display: none' : ''}">${innerWidth <= 330 ? `${el["price"]} ₽`: 'В корзину'}</button>
                <div class="listener">
                    <div class="deleteProduct" onclick="event.stopPropagation()">
                        <div class="elementMinus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
                                <path d="M9 1L1 1" stroke="#73798C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </div>
                    </div>
                    <p class="amount">0</p>
                    <div class="addProduct" onclick="event.stopPropagation()">
                        <div class="elementPlus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M5 1V9M9 5L1 5" stroke="#73798C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    if(drinksCheck >= 1  && innerWidth<= 511){
        drinksArticles.appendChild(drinksHr)
    }
    drinksArticles.appendChild(drinksArticle)
    
    drinksCheck += 1
}
//<-----------------------------------------------------------------КОЛ_ВО-ТОВАРА------------------------------------------------------>
let addAmount = (el) => {
    console.log("добавляю");
    
    ++el.parentElement.children[2].children[1].textContent

    for(let i = 0; i < arr.length; i++){ // хранилище
        if(el.parentElement.parentElement.children[0].children[0].textContent === arr[i].product ){
            arr[i].amount = el.parentElement.children[2].children[1].textContent
        }
    }
    localStorage.setItem("DodoPizza", JSON.stringify(arr))
}

let deleteAmount = (el) => {
    console.log('удаляю');
    
    --el.parentElement.children[2].children[1].textContent
    if(+el.parentElement.children[2].children[1].textContent === 0){
        el.parentElement.children[2].style.display = 'none'
        el.style.display = 'block'
        --amount.textContent
    }
    
    for(let i = 0; i < arr.length; i++){
        if(el.parentElement.parentElement.children[0].children[0].textContent === arr[i].product ){
            arr[i].amount = el.parentElement.children[2].children[1].textContent
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i].amount <= 0){
            let del = arr.splice(i, 1)
            el.parentElement.children[2].children[1].textContent = null
            // el.parentElement.children[2].children[0].removeEventListener()
            // el.parentElement.children[2].children[2].removeEventListener()
            
            console.log('удалил');
            
        }
    }
    
    if(arr.length === 0){
        if(innerWidth <= 630){
            basket.style.display = 'none'
        } else{
            basket.children[1].style.display = 'none'
            basket.children[2].style.display = 'none'
        }
        
    }
    localStorage.setItem("DodoPizza", JSON.stringify(arr))
}
//<----------------------------------------------------------------КОРЗИНА-И-ПРОЧЕЕ---------------------------------------------------->
let basicProduct = document.querySelectorAll('.basicProduct')
let basket = document.querySelector('.header__main_nav_button')
let amount = document.querySelector('.header__main_nav_button_amount')
let basketWindow = document.querySelector('.basket')
let closeBasket = document.querySelector('.basket-main-result__buttons_back')
let emptyBasket = document.querySelector('.emptyBasket')
if(window.innerWidth <= 600){
    closeBasket = document.querySelector('.basket-back__600px')
}
if(window.innerWidth <= 630){
    basket = document.querySelector('.basket_630px')
    amount = document.querySelector('.basket_630px_div_text')
}

basket.addEventListener('click', (event) => {
    if(arr.length === 0){
        event.preventDefault()
        emptyBasket.style.visibility = 'visible'
        emptyBasket.style.opacity = '1'
        window.setTimeout(() => {
            emptyBasket.style.visibility = 'hidden'
            emptyBasket.style.opacity = '0'
        }, 4000)
        
    }
})
let basketdel = document.querySelectorAll('.basket__delete')
if(window.innerWidth <= 600){
    for(let el of basketdel){
        el.style.display = 'none'
    }
}



let addNewProduct = (el, login) => { //------------------------добавление нового продукта--------------------------->
    // event.stopPropagation();
    // чтобы не открывалось окно корзины

    console.log('добавил новый продукт');
    el.parentElement.children[2].style.display = 'flex'
    el.style.display = 'none'
        
    //событие на удаление кол-во товара
    el.parentElement.children[2].children[0].addEventListener('click', () => deleteAmount(el))

    //событие на добавление кол-во товара
    el.parentElement.children[2].children[2].addEventListener('click', () =>  addAmount(el))

    if(window.innerWidth <= 630){
        basket.style.display = 'block'
        amount.textContent = arr.length
        
    } else{
        basket.children[1].style.display = 'block'
        basket.children[2].style.display = 'block'
    }

        
    if(login === true){//<-----------для local storage----------->
        if(window.innerWidth <= 630){
            amount.textContent = arr.length
            console.log(basket.children[1].children.textContent);
            
        } else{
            basket.children[2].textContent = arr.length 
        }
            
        for(let i = 0; i < arr.length; i++){
            if(arr[i].product === el.parentElement.parentElement.children[0].children[0].textContent){
                el.parentElement.children[2].children[1].textContent = arr[i].amount  
            }
        }
    } else{
        el.parentElement.children[2].children[1].textContent = '1'
        if(window.innerWidth <= 630){
            amount.textContent = arr.length +1
        } else{
            basket.children[2].textContent = arr.length +1
        }
    }

    if(login === false){
        arr.push({"product": el.parentElement.parentElement.children[0].children[0].textContent,"desc": el.parentElement.parentElement.children[0].children[1].textContent , "img": el.parentElement.parentElement.parentElement.children[0].src , "amount": 1, "price": el.parentElement.children[0].textContent.split(' ')[0]})
        localStorage.setItem("DodoPizza", JSON.stringify(arr))
    }
}

for(let el of basicProduct){
    el.addEventListener('click', () => addNewProduct(el, false) )
}

//<-----------------------------------------------------------МОДАЛЬНОЕ ОКНО------------------------------------------------->
let modalMain = document.querySelector(".modalMain")
let closemodalMain = document.querySelector('.closemodalMain')
let modalMainImg = document.querySelector('.modalMain__window_img')
let modalMainName = document.querySelector('.modalMain__window_content_info_name')
let modalMainAmount = document.querySelector('.modalMain__window_content_info_amount')
let modalMainDesc = document.querySelector('.modalMain__window_content_info_desc')
let modalMainButton = document.querySelector('.modalMain__window_content_button')

let closeTheModalMain = () => {
    modalMain.style.opacity = '0'
    modalMain.style.setProperty('z-index', '-1')
}
closemodalMain.addEventListener('click', () => closeTheModalMain())

let openModalMainForBasic = (el) => {
    modalMain.style.opacity = '1'
    modalMain.style.setProperty('z-index', '20')
    modalMainImg.src = el.children[0].src
    modalMainName.textContent = el.children[1].children[0].children[0].textContent
    modalMainAmount.textContent = '1 шт'
    modalMainDesc.textContent = el.children[1].children[0].children[1].textContent
    modalMainButton.textContent = `В корзину за ${el.children[1].children[1].children[0].textContent}`
    
    modalMainButton.addEventListener('click', () => {
        closeTheModalMain()
        let check = null
        for(let el of arr){ // есть ли такой товар в Local storage
            if(el.product === modalMainName.textContent){
                check = true
            }
        }
        if(check === true){
            addAmount(el.children[1].children[1].children[2])
        } else{
            addNewProduct(el.children[1].children[1].children[1], false)
        }
    })
}

let articles = document.querySelectorAll('article')
for(let el of articles){
    
    if(el.id === 'basicProduct'){
        el.addEventListener('click', () => openModalMainForBasic(el))
    } else{
        
    }
}

//<-----------------------------------------------------------------ХРАНИЛИЩЕ------------------------------------------------------------>
if(localStorage.getItem('DodoPizza') !== null){
    arr = JSON.parse(localStorage.DodoPizza)
    let article = document.getElementsByTagName('article')

    for(let i = 0; i < arr.length; i++){
        for(let el of article){
            if(el.id === 'basicProduct'){
                // console.log(el.children[1].children[0].children[0].textContent);
                if(arr[i].product === el.children[1].children[0].children[0].textContent){
                    addNewProduct(el.children[1].children[1].children[1], true)
                }
            }
        }
    }
    
}
