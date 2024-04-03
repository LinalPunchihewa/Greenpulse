// JavaScript to toggle overlay
document.querySelectorAll('.thumbnail-container').forEach(box => {
    box.addEventListener('click', function() {
        if (this.classList.contains('expanded')) {
            this.classList.remove('expanded');
            document.getElementById('overlay').style.display = 'none'; // Hide the overlay when clicked again
        } else {
            // Remove 'expanded' class from all other image boxes
            document.querySelectorAll('.thumbnail-container').forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.classList.remove('expanded');
                }
            });
            this.classList.add('expanded');
            document.getElementById('overlay').style.display = 'block'; // Display the overlay
        }
    });
});




function popmeup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");

  setTimeout(function() {
    popup.classList.remove("show");
  }, 5000);
}

window.onload = function() {
    popmeup();
  };