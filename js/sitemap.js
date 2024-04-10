
// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements in the class 'tabLink' and store them in 'links' variable

    const links = document.querySelectorAll('.tabLink');
    // Storing the total count of links
    const linkCount = links.length;

    // Add the event listener for keydown event on the document
    document.addEventListener('keydown', function (event) {
        // Getting the currently focused element
        const activeElement = document.activeElement;
        // Getting the key code of the pressed key
        const keyCode = event.keyCode;

        // Checking whether  the pressed key is arrow key 
        if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
            // Prevent the default action of arrow keys like scrolling the page

            event.preventDefault();
            // equaling current index to -1
            let currentIndex = -1;
            // looping through the links to find the index of the currently focused link
            for (let i = 0; i < linkCount; i++) {
                if (activeElement === links[i]) {
                    currentIndex = i;
                    break;
                }
            }
            // Calculate the index of the next link based on the pressed arrow key
            let nextIndex;
            if (keyCode === 37 || keyCode === 38) {
                // If the pressed key is left arrow or up arrow, decrement currentIndex
                // If currentIndex is already 0, set nextIndex to the last link

                nextIndex = currentIndex > 0 ? currentIndex - 1 : linkCount - 1;
            } else {
                // If the pressed key is right arrow or down arrow, increment currentIndex
                // If currentIndex is already the index of the last link, set nextIndex to 0
                nextIndex = currentIndex < linkCount - 1 ? currentIndex + 1 : 0;
            }
            // Focusing on the next link

            links[nextIndex].focus();
        }
    });
});




