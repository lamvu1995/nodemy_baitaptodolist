let btnOpen = document.querySelector('#open-btn')
let modal = document.querySelector('.modal')
let iconClose = document.querySelector('.modal-header i')
let btnClose = document.querySelector('.modal-footer button')
let modalInner = document.querySelector('.modal-inner')

function toggleModal() {
    modal.classList.toggle('hide')
}
btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e) {
    if (modal.classList !== 'hide') {
        modal.classList.add('hide')
    };
})
modalInner.addEventListener('click', function(e) {
    e.stopPropagation()
})