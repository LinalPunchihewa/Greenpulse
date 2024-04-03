

document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop();
    var links = document.querySelectorAll("#navbar li a");

    links.forEach(function(link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("current");
        }
    });
});


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    validateInputs();
});


function setError(element, message) {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}


const setSuccess = function(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    
    let nameValid = false;
    let emailValid = false;
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
        nameValid = true;
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        emailValid = true;
    }

    if (nameValid && emailValid) {
        submitForm();
    }
};


const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})

    
    const reasonTextarea = document.getElementById('reason');
    const reasonError = document.getElementById('reasonError');

    form.addEventListener('submit', function(event) {
        if (!reasonTextarea.checkValidity()) {
            reasonError.style.display = 'block';
            event.preventDefault();
        } else {
            reasonError.style.display = 'none';
        }
    });

    // Add event listeners to the radio buttons
    document.querySelectorAll('input[name="yesno"]').forEach((radio) => {
        radio.addEventListener('change', function() {
            if (this.value === 'no') {
                reasonTextarea.setAttribute('required', 'required');
            } else {
                reasonTextarea.removeAttribute('required');
                reasonError.style.display = 'none'; // Hide error message if it's visible
            }
        });
    });


const formReset = document.getElementById("form");

formReset.addEventListener("reset", function() {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("mailError").innerHTML = "";

    // document.getElementById("email").style.borderStyle = "none";

    //reset borders
    const nameBox = document.getElementById("username").parentNode;
    if (nameBox.classList.contains('success')){
        nameBox.classList.remove('success');
    }
    if (nameBox.classList.contains('error')){
        nameBox.classList.remove('error');
    }
    const mailBox = document.getElementById("email").parentNode;
    if (mailBox.classList.contains('success')){
        mailBox.classList.remove('success');
    }
    if (mailBox.classList.contains('error')){
        mailBox.classList.remove('error');
    }
    

    //reset stars
    const stars = document.getElementsByClassName('star');
    for (i=0; i<stars.length; i++) {
        if(stars[i].classList.contains("active")) {
            stars[i].classList.remove("active");
            stars[i].classList.remove("bxs-star");
            stars[i].classList.add("bx-star");
        }
        else {
            break;
        }
    }
});

function submitForm() {
    document.getElementById('form').submit();
}
