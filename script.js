// select the buttons
let cart = document.querySelector(".cart");
let show = document.querySelector("#open-cart");
let hide = document.querySelector("#hide-cart");

// show the cart
show.addEventListener("click", () => {
    cart.style.display = "block";
    show.style.display = "none";
});

// hide the cart
hide.addEventListener("click", () => {
    cart.style.display = "none";
    show.style.display = "inline-block";
});