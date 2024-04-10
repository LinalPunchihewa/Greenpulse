
function missionshadowin(){
    const miss = document.getElementById("mission");
    miss.style.textShadow="5px 2px 4px rgba(0, 0, 0, 0.5)";
    
}
function missionshadowout(){
    const miss = document.getElementById("mission");
    miss.style.textShadow="none";
}
document.getElementById('logo').addEventListener('click', function() {
    openInNewTab('https://www.globalgoals.org/goals/13-climate-action/');
});

document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop();
    var links = document.querySelectorAll("#navbar li a");

    links.forEach(function(link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("current");
        }
    });
});

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
