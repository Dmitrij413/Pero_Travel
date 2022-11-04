let offset = 0;
const sliderLine = document.querySelector('.slider-line');
let widthImg = document.querySelector('.popular-card').offsetWidth

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + widthImg + 20;
    if (offset > widthImg * 7 + 140) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - widthImg - 20;
    if (offset < 0) {
        offset = widthImg * 7 + 140;
    }
    sliderLine.style.left = -offset + 'px';
});

document.addEventListener('click', function(e) {
    let id = e.target.dataset.toggleId
    if(!id) return
    let elem = document.getElementById(id)
    elem.hidden = ! elem.hidden
})