let offset = 0;
const sliderLine = document.querySelector('.slider-line');
let widthImg = document.querySelector('.popular-card').offsetWidth

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + widthImg + 20;
    if (offset > widthImg * 5 + 160) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - widthImg - 20;
    if (offset < 0) {
        offset = widthImg * 5 + 160;
    }
    sliderLine.style.left = -offset + 'px';
});