



// instructions on how to build a carousel was followed using this video: https://www.youtube.com/watch?v=749ta0nvj8s

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

initializeSlider();



function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        
    }

    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);

}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}


function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);

}

 
