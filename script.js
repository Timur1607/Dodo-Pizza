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
                <button class="combo__article_info_price_button_create">${innerWidth <= 330 ? `${el["price"]} ₽`: 'Собрать'}</button>
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
                <button class="snacks__article_info_price_button basicProduct" style="${el.assembly === true ? 'display: none' : ''}">${innerWidth <= 330 ? `${el["price"]} ₽`: 'В корзину'}</button>
                <div class="listener">
                    <div class="deleteProduct">
                        <div class="elementMinus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
                                <path d="M9 1L1 1" stroke="#73798C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </div>
                    </div>
                    <p class="amount">0</p>
                    <div class="addProduct">
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
                <button class="desserts__article_info_price_button basicProduct" style="${el.assembly === true ? 'display: none' : ''}">${innerWidth <= 330 ? `${el["price"]} ₽`: 'В корзину'}</button>
                <div class="listener">
                    <div class="deleteProduct">
                        <div class="elementMinus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
                                <path d="M9 1L1 1" stroke="#73798C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </div>
                    </div>
                    <p class="amount">0</p>
                    <div class="addProduct">
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
                <button class="drinks__article_info_price_button basicProduct" style="${el.assembly === true ? 'display: none' : ''}">${innerWidth <= 330 ? `${el["price"]} ₽`: 'В корзину'}</button>
                <div class="listener">
                    <div class="deleteProduct">
                        <div class="elementMinus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
                                <path d="M9 1L1 1" stroke="#73798C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </div>
                    </div>
                    <p class="amount">0</p>
                    <div class="addProduct">
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
    console.log(el.parentElement.children[2].children[1].textContent);

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
if(window.innerWidth <= 630){
    basket = document.querySelector('.basket_630px')
    amount = document.querySelector('.basket_630px_div_text')
}
let addNewProduct = (el, login) => { //добавление нового продукта
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
            arr.push({'product': el.parentElement.parentElement.children[0].children[0].textContent, "amount": 1})
            localStorage.setItem("DodoPizza", JSON.stringify(arr))
        }
       
}

for(let el of basicProduct){
    el.addEventListener('click', () => addNewProduct(el, false) )
}

//<-----------------------------------------------------------ВЗАИМОДЕЙСТВИЯ С КОРЗИНОЙ------------------------------------------------->
let basketMain = document.querySelector(".basketMain")
basket.addEventListener('click', () => {
    basketMain.style.opasity = '1'
    basketMain.style.setProperty('z-index', '20')
    // console.log(basket.parentElement.parentElement.parentElement.style.display = 'none');
    
});


//<-----------------------------------------------------------------ХРАНИЛИЩЕ------------------------------------------------------------>
if(localStorage.getItem('DodoPizza') !== null){
    arr = JSON.parse(localStorage.DodoPizza)
    let article = document.getElementsByTagName('article')

    for(let i = 0; i < arr.length; i++){
        for(let el of article){
            if(arr[i].product === el.children[1].children[0].innerText.split('  ')[0].split('/n')[0].split('\n')[0].split('/n')[0].split('\n')[0]){
                addNewProduct(el.children[1].children[1].children[1], true)
            }
        }
    }
}

// let array = [1, 2, 3, 4, 5]
// let del = array.splice(2,1)

// console.log(array);
