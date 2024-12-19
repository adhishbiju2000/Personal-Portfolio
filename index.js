let lastScroll = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove("hidden");
    } else if (currentScroll > lastScroll) {
        navbar.classList.add("hidden"); // Hide navbar when scrolling down
    } else {
        navbar.classList.remove("hidden"); // Show navbar when scrolling up
    }

    lastScroll = currentScroll;
});
