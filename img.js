const body = document.querySelector("body");

const IMG_NUM = 16;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image)
}

function getRandom(){
    const randomNum = Math.ceil(Math.random()*IMG_NUM);
    return randomNum;
    
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();