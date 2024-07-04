let slider = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#btn1");
let arrowRight = document.querySelector("#btn2");
let current = 0;
let slideInterval;

function reset() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove("active");
    }
}

function start() {
    reset();
    slider[current].classList.add("active");
}

function slideLeft() {
    if (current === 0) {
        current = slider.length - 1;
    } else {
        current--;
    }
    reset();
    slider[current].classList.add("active");
}

function slideRight() {
    if (current === slider.length - 1) {
        current = 0;
    } else {
        current++;
    }
    reset();
    slider[current].classList.add("active");
}

function startSlideShow() {
    slideInterval = setInterval(slideRight, 5000); 
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

arrowLeft.addEventListener("click", () => {
    stopSlideShow();
    slideLeft();
    startSlideShow();
});

arrowRight.addEventListener("click", () => {
    stopSlideShow();
    slideRight();
    startSlideShow();
});

start();
startSlideShow();

function checkVisibility() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        let rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            box.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

document.getElementById('btn').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    const searchQuery = document.getElementById('items').value.toLowerCase().trim();

    if (searchQuery === "double door fridge") {
        window.location.href = "desc.html?id=1";
    } else if (searchQuery === "fridges" || searchQuery === "refrigerator" || searchQuery === "fridge" || searchQuery === "refrigerators") {
        window.location.href = "fridge.html";
    } else if (searchQuery === "single door fridge" || searchQuery === "single door") {
        window.location.href = "desc.html?id=2";  
    } else if (searchQuery === "french door fridge" || searchQuery === "french door") {
        window.location.href = "desc.html?id=3";
    } else if (searchQuery === "freezer top fridge" || searchQuery === "freezer on top") {
        window.location.href = "desc.html?id=4";
    } else if (searchQuery === "quad door fridge" || searchQuery === "4 doors") {
        window.location.href = "desc.html?id=5";
    } else if (searchQuery ==="mixer" || searchQuery === "mixers") {
        window.location.href = "desc.html?id=90";
    } else if (searchQuery === "grinder" || searchQuery === "grinders") {
        window.location.href = "desc.html?id=91";
    } else if (searchQuery === "juicer" || searchQuery === "juicers") {
        window.location.href = "desc.html?id=92";
    } else if (searchQuery === "mixers, juicers & grinders") {
        window.location.href = "j and m.html";
    } else {
        alert("Product not found");
    }
    return false;
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//for carousel

function showPrevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextItem, 3000);

const carouselContainer = document.getElementById('carousel-container');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const offset = -currentIndex * (items[0].clientWidth + 30); // 30 is for margin
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

function showNext() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);

// Auto slide
setInterval(showNext, 9000); // Change slide every 3 seconds

document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.getElementById('carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        carouselContainer.style.transform = `translateX(-${currentIndex * (250 + 30)}px)`;
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        carouselContainer.style.transform = `translateX(-${currentIndex * (250 + 30)}px)`;
    });
});

//deals of the day timer

var countDownDate = localStorage.getItem('countDownDate');

        if (!countDownDate) {
            countDownDate = new Date().getTime() + 20 * 60 * 60 * 1000;
            localStorage.setItem('countDownDate', countDownDate);
        } else {
            countDownDate = parseInt(countDownDate);
        }
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();
        
            // Find the distance between now and the countdown date
            var distance = countDownDate - now;
        
            // Time calculations for hours, minutes, and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            // Output the result in an element with id="timer"
            document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
            if (seconds<10) {
                document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + "0" + seconds + "s ";
            }
            if (minutes<10) {
                document.getElementById("timer").innerHTML = hours + "h " + "0" + minutes + "m " + seconds + "s ";
            }
            if (hours<10) {
                document.getElementById("timer").innerHTML = "0" + hours + "h " + minutes + "m " + seconds + "s ";
            }
            // If the countdown is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "EXPIRED";
                localStorage.removeItem('countDownDate'); // Clear the stored end time
            }
        }, 1000);