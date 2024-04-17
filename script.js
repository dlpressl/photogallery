document.addEventListener('DOMContentLoaded', (event) => {
    const readMoreBtn = document.querySelector('.button-read-more');
    let cardHeight = document.querySelector('.card').clientHeight;  // Get the card height
    let scrollPosition = 0;

    readMoreBtn.addEventListener('click', () => {
        const container = document.querySelector('.cards-container');
        scrollPosition += cardHeight;  // Increase scroll position by one card height
        if (scrollPosition >= container.scrollHeight) {
            scrollPosition = 0;  // Reset scroll position if at the end
        }
        // Scroll cards up by setting a negative transform value
        container.style.transform = `translateY(-${scrollPosition}px)`;
    });
});
