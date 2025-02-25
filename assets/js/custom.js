document.querySelectorAll(".scroll-left").forEach(leftButton => {
    leftButton.addEventListener("click", function () {
        const container = this.parentElement.querySelector(".scroll-container");
        if (container) {
            container.scrollBy({ left: -300, behavior: "smooth" });
        }
    });
});

document.querySelectorAll(".scroll-right").forEach(rightButton => {
    rightButton.addEventListener("click", function () {
        const container = this.parentElement.querySelector(".scroll-container");
        if (container) {
            container.scrollBy({ left: 300, behavior: "smooth" });
        }
    });
});
