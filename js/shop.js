//Opening and closing cart container
const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const body = document.querySelector('body');
//Open shopping cart
openShopping.addEventListener('click', function() {
    body.classList.add('active');
});
//Close shopping cart
closeShopping.addEventListener('click', function() {
    body.classList.remove('active');
})

//Create variable to contain total price of cart
var totalPrice = 0.00;


//Add item to cart
const cartList = document.querySelector(".cartList");
function addToCart(button) {
    //Increase cart counter display
    changeCartCounter(true);
    //Obtain item info
    let parent = button.parentNode;
    let priceString = parent.querySelector('.item-price').textContent;
    let unitPrice = parseFloat(priceString.slice(4));
    let quantity = parent.querySelector('.quantity').value;
    let price = unitPrice * quantity;
    let customizeChoice = parent.querySelector('.customize-select').value; 
    let itemName = parent.querySelector('.item-name').textContent;
    //Create item to add to list in cart
    let newItem = document.createElement('li');
    newItem.innerHTML = `
        <div class="title">${itemName} | ${customizeChoice}</div>
        <div class="nett-price">Rs. ${price}</div>
        <div class="itemCount">${quantity}</div>
        <button class="delete-item" onclick="deleteItem(this)">
        <i class="fa fa-trash"></i>
        </button>
    `
    //Add item to cart container
    cartList.appendChild(newItem);
    //Update cart total
    totalPrice += price;
    let totalContainer = document.querySelector('.totalPrice');
    totalContainer.innerHTML = `Total: Rs. ${totalPrice}`;
    //Update total in checkout screen
    let checkoutTitle = document.querySelector('#checkout-title');

    checkoutTitle.innerHTML = `<h1 id="checkout-title"><i class="fa fa-shopping-cart"></i> Checkout (Total: Rs. ${totalPrice})</h1>`;
}

//Delete item from cart function
function deleteItem(button) {
    //Decrease cart counter display
    changeCartCounter(false);
    //Obtain item info
    let parent = button.parentNode;
    let priceString = parent.querySelector('.nett-price').textContent;
    let price = parseFloat(priceString.slice(4));
    //Remove item from list
    parent.remove();
    //Update cart total
    totalPrice -= price;
    let totalContainer = document.querySelector('.totalPrice');
    totalContainer.innerHTML = `Total: Rs. ${totalPrice}`;
}

//Change cart item counter display
function changeCartCounter(increase) {
    //Get current number displayed
    let quantityContainer = document.querySelector('.quantity');
    let quantity = parseInt(quantityContainer.textContent);
    //Increment or decrement based on function input 
    if (increase) {
        quantity++;

    }
    else {
        quantity--;
    }
    //Add back to html
    quantityContainer.innerHTML = quantity;
}

//Move to checkout
function toCheckout() {

    //Get quantity of items in cart
    let quantityContainer = document.querySelector('.quantity');
    let quantity = parseInt(quantityContainer.textContent);
    //Check if cart is empty
    if(quantity==0) {    //Empty
        //Display error message
        alert("Please select at least one product to proceed to checkout");
    }
    else {
        let checkoutDiv = document.querySelector('.checkout-screen');
        checkoutDiv.classList.add('active');
    }
}

//Exit checkout
function leaveCheckout() {
    let checkoutDiv = document.querySelector('.checkout-screen');
    checkoutDiv.classList.remove('active');
}


//Checkout input validation
function validationChecker(inputField, errorField, regexIn) {
    //check validity
    if (regexIn.test(inputField.value)) {
        errorField.textContent = "";
        return true;
    }
    else {
        errorField.textContent = "Invalid input";
        return false;
    }
    
}


//complete checkout
var form = document.getElementById("checkout-form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); //stop default submit
    //Validation checks
    //Name check
    const fullNameInput = document.getElementById('fullName');
    const fullNameError = document.getElementById('fullName-error');
    let validName =  validationChecker(fullNameInput, fullNameError, /^[A-Za-z\s\-]+$/);
    if (validName) {
        //Email check
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        let validEmail = validationChecker(emailInput, emailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (validEmail) {
            // Contact number check
            const contactNoInput = document.getElementById('contactNo');
            const contactNoError = document.getElementById('contactNo-error');
            let validContactNo = validationChecker(contactNoInput, contactNoError, /^\d{10}$/);
            if (validContactNo) {
                //Card name check
                const cardNameInput = document.getElementById('cardName');
                const cardNameError = document.getElementById('cardName-error');
                let validCardName =  validationChecker(cardNameInput, cardNameError, /^[A-Za-z\s\-]+$/);
                if (validCardName) {
                    // Credit card number check
                    const cardNumberInput = document.getElementById('cardNumber');
                    const cardNumberError = document.getElementById('cardNumber-error');
                    let validCardNumber = validationChecker(cardNumberInput, cardNumberError, /^\d{16}$/);
                    if (validCardNumber) {
                        // Expiration check
                        const expireInput = document.getElementById('expire');
                        const expireError = document.getElementById('expire-error');
                        let validExpiration = validationChecker(expireInput, expireError, /^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
                        if (validExpiration) {
                            // CVV check
                            const cvvInput = document.getElementById('cvv');
                            const cvvError = document.getElementById('cvv-error');
                            let validCVV = validationChecker(cvvInput, cvvError, /^[0-9]{3,4}$/);
                            if (validCVV) {
                                //All inputs valid
                                //Submit form
                                checkoutSubmission()
                            }
                        }
                    }
                }
            }
        }
    }
});

//Do the relevant changes when form is submitted, inlcuding submitting form
function checkoutSubmission() {
    //submit form
    form.submit();
    //Go back to shop page
    leaveCheckout();
    //Clear contents of cart
    cartList.innerHTML = `<li>
                <div class="cart-header">Item name</div>
                <div class="cart-header">Nett price</div>
                <div class="cart-header">Qty</div>
            </li>`;
    //Alert user that purchase is complete
    alert("Checkout complete! Thank you for your purchase.");
}

//Remove error messages on reset
form.addEventListener("reset", function(){
    //Get all error messages
    errorContainers = document.getElementsByClassName('error-message');
    for(let i=0; i<errorContainers.length; i++){
        errorContainers[i].innerHTML = "";
    }
});