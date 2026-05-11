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
/* Menu drop down */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
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
