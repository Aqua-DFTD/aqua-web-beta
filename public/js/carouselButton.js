const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const cards = document.querySelector(".cards");

prevBtn.addEventListener("click", () => {
    cards.scrollBy({
        left: (window.screen.width <= 600) ? -cards.offsetWidth - 20 : -cards.offsetWidth / 6,
        behavior: "smooth"
    });
});

nextBtn.addEventListener("click", () => {
    cards.scrollBy({
        left: (window.screen.width <= 600) ? cards.offsetWidth + 20 : cards.offsetWidth / 6,
        behavior: "smooth"
    });
});