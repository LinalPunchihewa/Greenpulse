const profileContainers = [
    document.getElementById("profile-container1"),
];

const userInputs = [
    document.getElementById("user-input1"),
    document.getElementById("user-input2"),
    document.getElementById("user-input3"),
    document.getElementById("user-input4")
];

const questionContainers = [
    document.getElementById("question1"),
    document.getElementById("question2"),
    document.getElementById("question3"),
    document.getElementById("question4")
];

const nextButtons = [
    document.getElementById("next-btn1"),
    document.getElementById("next-btn2"),
    document.getElementById("next-btn3"),
    document.getElementById("next-btn4")
];

const skipButtons = [
    document.getElementById("skip-btn1"),
    document.getElementById("skip-btn2"),
    document.getElementById("skip-btn3"),
    document.getElementById("skip-btn4")
];


const questionsList = [
    ["Your name:", "Your surname:", "Your age:", "Your gender:", "Are you agreeing with privacy terms ?"],
    ["What brings you to this cause ?", "What's the DoA ?", "What is your preffered task ?", "What's the volunteering area ?", "Assignment type:"],
    ["Main field of study", "The highest degree qualification", "University", "Year of completion", "Country"],
    ["Enter your favorite color:", "Enter your favorite food:", "Enter your favorite movie:", "Enter your favorite book:"]
];

const responsesList = [
    ["Name:", "Surname:", "Age:", "Gender:", "Agree with privacy terms:"],
    ["Rational:", "DoA:", "Task:", "Place:", "Assignment type:"],
    ["Area of study:", "Highest degree:", "University/institution:", "Completion year:","Country:"],
    ["Favorite Color:", "Favorite Food:", "Favorite Movie:", "Favorite Book:"]
];

var countQs =[
    document.getElementById("count-1"),
    document.getElementById("count-2"),
    document.getElementById("count-3"),
    document.getElementById("count-4")
];

var labProgress = document.getElementById("labProgress");



const container = document.querySelector('.mainContainer');
var nowIndex = 0;

function showNextDiv() {
    const divs = container.querySelectorAll('.mainDiv');
    divs[nowIndex].style.display = 'none';
    nowIndex = (nowIndex + 1) % divs.length;
    divs[nowIndex].style.display = 'block';
}

let currentIndex = [0, 0, 0, 0];
const userDetails = [[], [], [], []];

function askQuestion(containerIndex) {
    questionContainers[containerIndex].innerHTML = questionsList[containerIndex][currentIndex[containerIndex]];
}

function displayUserDetails(containerIndex) {
    const detail = document.createElement("div");
    detail.innerHTML = responsesList[containerIndex][currentIndex[containerIndex]] + " " + userDetails[containerIndex][currentIndex[containerIndex]];
    
    profileContainers[0].appendChild(detail);
}



function increaseProgress() {
    var progressBar = document.getElementById("progressBar");
    progressBar.value += 25;
    labProgress.innerHTML = "Profile Completed " + progressBar.value + "%";

    // Check if progress reaches 100%
    if (progressBar.value === 100) {
        openPopup();
    }
}


function changeCount(containerIndex){
    countQs[containerIndex].innerHTML = containerIndex+1;
}

function getNextButtonFunction(containerIndex) {
    return function () {
        if (userInputs[containerIndex].value.trim() !== "") {
            userDetails[containerIndex].push(userInputs[containerIndex].value.trim());
            userInputs[containerIndex].value = "";
            if (currentIndex[containerIndex] < questionsList[containerIndex].length) {
                displayUserDetails(containerIndex);
                currentIndex[containerIndex]++;
                if (currentIndex[containerIndex] < questionsList[containerIndex].length) {
                    askQuestion(containerIndex);
                    changeCount(containerIndex);

                } else {
                    nextButtons[containerIndex].innerHTML = "Finish";
                    increaseProgress();
                    showNextDiv();
            
                    
                }
            } else {
                divs.style.display="none";
            }
        } else {
            alert("Please enter a value.");
        }
    };
}


for (let i = 0; i < nextButtons.length; i++) {
    skipButtons[i].addEventListener("click", skipQuestion(i));
    nextButtons[i].addEventListener("click", getNextButtonFunction(i));
    askQuestion(i);
}

function skipQuestion(i) {
    return function() {
        console.log(i);
    }
}



const overlay = document.getElementById("blurredOverlay");


function openPopup(){
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.blurredOverlay');
    popup.classList.add("open-popup");
    overlay.style.display = "block";
}

// Function to close the popup
function closePop(){
    popup.classList.remove("open-popup");
    document.querySelector(".blurredOverlay").classList.remove("open-popup");
    // Redirect to another page
    window.location.href = "home.html";
}







