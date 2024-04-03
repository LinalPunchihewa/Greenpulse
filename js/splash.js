// Setting up preloader for home page
function preloadHome() {
    var homePage = document.createElement('iframe');
    homePage.src = "home.html";
    homePage.style.display = "none";
    document.body.appendChild(homePage);
}

// Redirect function to home page and set up animation
function redirectHome() {
    window.location.href="home.html";
}

//Fading out animation
function fadeOut() {
    document.body.classList.add('fade-out');
}

// Set up the automatic redirection 4 seconds after loading splash screen
window.onload = function() {
    preloadHome();
    setTimeout(function() {
        fadeOut();
        setTimeout(redirectHome, 2000);
    }, 4000);
}
