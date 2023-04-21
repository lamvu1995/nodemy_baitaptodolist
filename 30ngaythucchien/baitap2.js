let allImage = document.querySelectorAll('.wrapper img');
console.log(allImage);
let gallery = document.querySelector('.gallery');
let btnClose = document.querySelector('.btn-close');
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');
let galleryInner = document.querySelector('.gallery-inner img');
let currentIndex = 0;
function showGallery() {
    if(currentIndex == 0) {
        btnPrev.classList.add('hide')
    } else {
        btnPrev.classList.remove('hide')
    }
    if (currentIndex == allImage.length - 1) {
        btnNext.classList.add('hide')
    } else {
        btnNext.classList.remove('hide')
    }
    galleryInner.src = allImage[currentIndex].src
    gallery.classList.add('show')
}
allImage.forEach((item, index) => {
    item.addEventListener('click', function(){
        currentIndex = index;
       showGallery()
    })
})
btnClose.addEventListener('click', function(e) {
    gallery.classList.remove('show');
});
document.addEventListener('keydown', function(e) {
if (e.target = 27) {
    gallery.classList.remove('show')
}
})

gallery.addEventListener('click', function(event) {
  event.stopPropagation();
});
btnNext.addEventListener('click', function(){
    if(currentIndex < allImage.length - 1) {
        currentIndex++
        showGallery()
      }
})
btnPrev.addEventListener('click', function(){
    if(currentIndex > 0) {
        currentIndex--;
        showGallery()
    }
})