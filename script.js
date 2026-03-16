// Scroll reveal animation

const cards = document.querySelectorAll(
'.service-card,.feature-card,.review-card'
);

window.addEventListener("scroll", () => {

cards.forEach(card => {

const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 50){

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

});

});