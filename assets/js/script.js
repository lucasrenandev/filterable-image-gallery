"use strict";

const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

function filterCards(event) {
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    filterableCards.forEach((card) => {
        card.classList.add("hide");
        if(card.dataset.name === event.target.dataset.name || event.target.dataset.name === "all") {
            card.classList.remove("hide");
        };
    }); 
};

filterButtons.forEach((button) => button.addEventListener("click", filterCards));