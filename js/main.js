const cartButton = document.querySelector('#cart-button')
const closeBtn = document.querySelector('.close')
const modal = document.querySelector('.modal')

toggleModal = () => {
  modal.classList.toggle('is-open')
}

cartButton.addEventListener('click', toggleModal)
closeBtn.addEventListener('click', toggleModal)



new WOW().init();