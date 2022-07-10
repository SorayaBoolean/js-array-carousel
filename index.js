const imgArray = [
    "img/01.jpg", 
    "img/02.jpg", 
    "img/03.jpg", 
    "img/04.jpg"
]

let slideAttiva = 0;
//riproduco l' array di immagini attraverso javascript //

const itemsDom = document.querySelector ('.items') ;

for ( let i = 0; i < imgArray.length; i++) {
    itemsDom.innerHTML +=
    ` <div class="item"> 
    <img class="img-carousel" src="${imgArray [i]}/>"
    </div>`;
} 

//partendo dall elemento 0 dell array di img gli attribuisco show//
const itemList = document.getElementsByClassName ('item');
console.log(itemList)
 
itemList [slideAttiva].classList.add('show');

//aggiungo event listner per div next

const next = document.querySelector ('.next')

next.addEventListener ('click',
    function () {
        itemList [slideAttiva].classList.remove ('show');
        slideAttiva++ ;
        itemList [slideAttiva].classList.add('show');

    }
)

const previous = document.querySelector ('.previous')

previous.addEventListener ('click',
    function () {
        itemList [slideAttiva].classList.remove ('show');
        slideAttiva-- ;
        itemList [slideAttiva].classList.add('show');

    }
)