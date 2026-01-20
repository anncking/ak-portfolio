let slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            let i;
            // Get all elements with the class name 'slide'
            let slides = document.getElementsByClassName("slide");
            
            // If we go past the last slide, loop back to the first
            if (n > slides.length) {
                slideIndex = 1;
            }
            // If we go before the first slide, loop to the last
            if (n < 1) {
                slideIndex = slides.length;
            }
            
            // Hide all slides
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            
            // Display the current slide (adjusted for zero-based array index)
            slides[slideIndex - 1].style.display = "block";
        }
