$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
    });
});

// -----------------------------------------------------------

const questionsBlockItems = document.querySelectorAll('.questions_block__items')
const questionsBlockItemsButton = document.querySelectorAll('.questions_block__items-button')
const questionsBlockContent = document.querySelectorAll('.questions_block__content')

questionsBlockItemsButton.forEach(b => {
    b.addEventListener('click', function() {
        let index = Array.from(questionsBlockItemsButton).indexOf(this);
        questionsBlockItems[index].classList.toggle('active-items');
        questionsBlockContent[index].classList.toggle('active-content');
    });
});