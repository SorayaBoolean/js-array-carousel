const imgArray = [
    "01.jpg", 
    "02.jpg", 
    "03.jpg", 
    "04.jpg",
    "05.jpg",
];

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

const next = document.querySelector ('.next');
const previous = document.querySelector ('.previous');

next.addEventListener ('click',
    function () {
        itemList [slideAttiva].classList.remove ('show');
        slideAttiva++ ;
        itemList [slideAttiva].classList.add('show');

        previous.classList.remove ('hidden')

        if (slideAttiva== itemList.length - 1) {
            next.classList.add ('hidden')
        }
    }

    
)

previous.addEventListener ('click',
    function () {
        itemList [slideAttiva].classList.remove ('show');
        slideAttiva-- ;
        itemList [slideAttiva].classList.add('show');

    }
)