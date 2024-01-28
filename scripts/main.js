document.addEventListener('DOMContentLoaded', function() {
    console.log("content loaded");

    document.addEventListener('scroll', function () {
        var navContainer = document.querySelector('.nav-container');
        var navPlaceholder = document.querySelector('.nav-placeholder'); // Add this line
        var scrollThreshold = navContainer.offsetHeight; // Adjust this value as needed
        
        if (window.scrollY >= scrollThreshold) {
            navContainer.style.position = 'fixed';
            navContainer.style.top = '0';   
            navPlaceholder.style.height = navContainer.offsetHeight + 'px'; // Set placeholder height
        } else {
            navContainer.style.position = 'relative';
            navPlaceholder.style.height = '0'; // Reset placeholder height
        }
    });
 
    var availabilityButton = document.getElementById('availability-button');

    if (availabilityButton) {
        availabilityButton.addEventListener('click', function() {
            console.log('scroll offset worked');
            var testContainer = document.getElementById('test-container');

            if (testContainer) {
                var testContainerOffset = testContainer.offsetTop;
                window.scrollTo({
                    top: testContainerOffset - 200,
                    behavior: 'smooth'
                });
            } else {
                console.warn("Element with id 'test-container' not found.");
            }
        });
    } else {
        console.warn("Button with id 'availability-button' not found.");
    }

    let slideIndex = 0;
    let slides;

    fetch('../json/slideshow-imgs.json')
        .then(response => response.json())
        .then(data => {
            slides = data;
            console.log(slides.slide); // Move this inside the 'then' block
        })
        .catch(error => console.error(error));

    function handleArrows() {
        // Check if 'slideIndex' is within the valid range
        if (slideIndex > 0) {
            $('#prev').remove();
        } else {
            $('#prev').show(); // If not greater than 0, show the 'prev' button
        }

        // Check against the length of 'slides.slide'
        if (slideIndex < Object.keys(slides.slide).length - 1) {
            $('#next').remove();
        } else {
            $('#next').show(); // If not less than the length, show the 'next' button
        }
    }
    handleArrows();

    function plusSlides(direction) {
        if (direction === 'prev') {
            slideIndex--;
            handleArrows();
        } else if (direction === 'next') {
            slideIndex++;
            handleArrows();
        }
    }
});



