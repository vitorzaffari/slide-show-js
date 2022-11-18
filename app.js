const slides = document.querySelectorAll('.slide');
const proximoBtn = document.querySelector('.proximo');
const anteriorBtn = document.querySelector('.anterior');


slides.forEach(function(slide,index){
    slide.style.left = `${index *100}%`
})


let counter = 0;

proximoBtn.addEventListener('click', function(){
    counter++;
    transicao();
})

anteriorBtn.addEventListener('click', function(){
    counter--;
    transicao();
})

function transicao(){
    if(counter === slides.length){
        counter = 0;
    }
    if(counter < 0){
        counter = slides.length -1;
    }
    slides.forEach(function(slide){
        slide.style.transform= `translateX(-${counter*100}%)`
    })
}
