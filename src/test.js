
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });


    



        let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;

    // Show the current slide
    function updateSlider() {
      const slideWidth = document.querySelector('.slide').clientWidth;
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Previous Slide
    document.getElementById('prev').addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? slideCount - 1 : currentIndex - 1;
      updateSlider();
    });

    // Next Slide
    document.getElementById('next').addEventListener('click', () => {
      currentIndex = (currentIndex === slideCount - 1) ? 0 : currentIndex + 1;
      updateSlider();
    });

    // Initialize Slider
    window.addEventListener('load', () => {
      updateSlider();
    });




   