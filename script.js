$(document).ready(function() {
    hideElementsAfterDelay('projects', 3000); // 10000 milliseconds = 10 seconds
});

// Function to hide elements with the specified class using jQuery
function hideElementsAfterDelay(className, delay) {
    setTimeout(() => {
        $('#' + className).fadeOut(1000); // Use jQuery's hide() method
    }, delay);
}