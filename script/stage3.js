let arr = JSON.parse(localStorage.information)
console.log(arr);

let address = document.querySelector('.stage3-main__div_address')
if(window.innerWidth > 600){
    address.textContent = `Доставим по адресу: ${arr[0].address}`
    
} else if (window.innerWidth <= 600){
    address = document.querySelector('.stage3-main__div-600px_text')
    address.textContent = `${arr[0].address}`
}


let cancel = document.querySelectorAll('.stage3-main__button_cancel')
if(window.innerWidth > 600){
    cancel = document.querySelectorAll('.stage3-main__button_cancel')[0]
} else if(window.innerWidth <= 600){
    cancel = document.querySelectorAll('.stage3-main__button_cancel')[1]
}

let cancelModal = document.querySelector(".cancel")
let deleteOrder = document.querySelector('.cancel__button_yes')
let notDeleteOrder = document.querySelector('.cancel__button_no')

let stage3text = document.querySelector('.stage3-main__div-info_accept')
let stage3text_600px = document.querySelector('.stage3-main__h1')

let stage3time = document.querySelector('.stage3-main__div-info_time')
let stage3buttons = document.querySelector('.stage3-main__buttons')

notDeleteOrder.addEventListener('click', () => {
    cancelModal.style.setProperty('z-index', '-1')
    cancelModal.style.setProperty('opacity', '0')
})
deleteOrder.addEventListener('click', () => {
    cancelModal.style.setProperty('z-index', '-1')
    cancelModal.style.setProperty('opacity', '0')

    stage3text.textContent = 'Заказ отменен'
    stage3text_600px.textContent = 'Заказ отменен'

    stage3time.textContent = ''
    cancel.style.display = 'none'
    stage3buttons.style.setProperty('justify-content', 'flex-end')
})

cancel.addEventListener('click', () => {
    cancelModal.style.setProperty('z-index', '10')
    cancelModal.style.setProperty('opacity', '1')
    console.log('sdf');
})