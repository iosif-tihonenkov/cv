let images = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png'    
];

let num = 0;
function nextImg() {
    let slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function backImg() {
    let slider = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}