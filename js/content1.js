const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 0) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
})

document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop();
    var links = document.querySelectorAll("#navbar li a");

    links.forEach(function(link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("current");
        }
    });
});
