// This is being used to add an event listener for click on image_box
document.querySelectorAll('.image_box').forEach(box => {
    box.addEventListener('click', function () {
        if (this.classList.contains('expanded')) {
            this.classList.remove('expanded');
        } else {
            // Remove 'expanded' class from all other image boxes
            document.querySelectorAll('.image_box').forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.classList.remove('expanded');
                }
            });
            this.classList.add('expanded');
        }
    });
});

// Get the font selector element
var fontSelector = document.getElementById('font-selector');
var textToChange = document.getElementsByClassName("font-change");


// Add event listener to detect any changes of the font selection
fontSelector.addEventListener('change', function () {
    // Getting  selected font
    var selectedFont = fontSelector.value;

    // Setting the selected font as the body font
    for (var i = 0; i < textToChange.length; i++) {
        textToChange[i].style.fontFamily = selectedFont;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the color picker element
    var colorPicker = document.getElementById('color-picker');

    // Add event listener to detect changes in color selection
    colorPicker.addEventListener('input', function () {
        // Get the selected color
        var selectedColor = colorPicker.value;

        // Apply the selected color to the texts inside the expanded image boxes
        document.querySelectorAll('.image_box.expanded h1, .image_box.expanded p').forEach(function (heading) {
            heading.style.color = selectedColor;
        });

        for (var i = 0; i < textToChange.length; i++) {
            textToChange[i].style.color = selectedColor;
        }
    });

    // Get the font selector element
    var fontSelector = document.getElementById('font-selector');

    // Add event listener to detect changes in font selection
    fontSelector.addEventListener('change', function () {
        // Get the selected font
        var selectedFont = fontSelector.value;

        // Apply the selected font to the texts inside the expanded image boxes
        document.querySelectorAll('.image_box.expanded h1, .image_box.expanded p').forEach(function (heading) {
            heading.style.fontFamily = selectedFont;
        });
    });
});





