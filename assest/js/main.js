const images = [
    'assest/images/image1.jpg',
    'assest/images/image2.jpg',
    'assest/images/image3.jpg',
];

let currentImageIndex = 0;

function prevImage() {
    if (currentImageIndex == 0) {
        currentImageIndex = images.length - 1
    } else {
        currentImageIndex--
    }
    document.sliderimg.src = images[currentImageIndex]
    // updateSlider();
}

function nextImage() {
    if (currentImageIndex == images.length - 1) {
        currentImageIndex = 0
    } else {
        currentImageIndex++
    }
    document.sliderimg.src = images[currentImageIndex]
    // updateSlider();
}

// function updateSlider() {
//     const newPosition = -currentImageIndex * 100 + '%';
//     currentImageIndex.style.transform = 'translateX(' + newPosition + ')';
// }

let autoplayInterval;
function startAutoplay() {
    autoplayInterval = setInterval(nextImage, 2000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

sliderimg.addEventListener('mouseenter', stopAutoplay);
sliderimg.addEventListener('mouseleave', startAutoplay);

startAutoplay();


// const wow = document.getElementById('prev-btn');
// const test = document.querySelector('#slidertranstion');

// wow.addEventListener('click', () => {
//   setTimeout(() => test.classList.add('reveal'), 0);
// })