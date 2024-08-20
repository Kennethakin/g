const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".e i");


stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        updateRating(index);
    });
});

function updateRating(index) {
    // Update star rating
    stars.forEach((star, idx) => {
        if (idx <= index) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });

    // Update visible emoji
    emojis.forEach((emoji, idx) => {
        if (idx === index) {
            emoji.classList.add("active");
        } else {
            emoji.classList.remove("active");
        }
    });
}

