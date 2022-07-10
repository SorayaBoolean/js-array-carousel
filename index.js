const imgArray = [
    "img/01.jpg", 
    "img/02.jpg", 
    "img/03.jpg", 
    "img/04.jpg"
]

const itemsDom = document.querySelector ('items')

for [ let i = 0; i < imgArray.length; i++] {
    itemsDom.innerHTML += `<div class="item"> 
    <img class="img-carousel" src="${imgArray [i]}/>"
    </div>` ;
} 

const ItemList = document.getElementsByClassName ('item');
                