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



});