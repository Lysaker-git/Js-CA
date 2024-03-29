const form = document.querySelector("#form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const addressInput = document.querySelector("#address");
const textareaInput = document.querySelector("#txtarea");
const success = document.querySelector(".sucsess");

const hidden = document.querySelectorAll(".hidden");
const hideform = document.querySelector(".hideform")
// Using QSA so i can have all the error p's in a array. This makes the code a little more unreadable but i wanted to try it this way to get experience with QSA as well.
// In other words, i know i could use QS to target every p, but i opted out of it so i could have 1 const instead of 4 as well as keep the same classname.
// I also understand the downsides if the elements on the page were to switch places.
// P[0] = Name, P[1] = Email, P[2] = Address, P[3] = Txtarea


// Looked into MDN because event.preventdefault is decrepated by VSCode. Thats why im passing event into the function. 

// form.addEventListener("submit", checkingValues (event) {});
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let counter = 0;

    if (validateData(nameInput.value, 2)) {
        hidden[0].style.display = "block";
        nameInput.style.border = "solid red 2px";
    }
    else {
        hidden[0].style.display = "none";
        nameInput.style.border = "none";
        counter += 1
    };

    if (validateMail(emailInput.value)) {
        hidden[1].style.display = "none";
        emailInput.style.border = "none";
        counter += 1
    }
    else {
        hidden[1].style.display = "block";
        emailInput.style.border = "solid red 2px";
    };

    if (validateData(addressInput.value, 25)) {
        hidden[2].style.display = "block";
        addressInput.style.border = "solid red 2px";
    }
    else {
        hidden[2].style.display = "none";
        addressInput.style.border = "none";
        counter += 1
    };

    if (validateData(textareaInput.value, 10)) {
        hidden[3].style.display = "block";
        textareaInput.style.border = "solid red 2px";
    }
    else {
        hidden[3].style.display = "none";
        textareaInput.style.border = "none";
        counter += 1
    };
    if (counter === 4) {
        success.style.display = "block";
        hideform.style.display = "none";
        form.reset();
    }
});

function validateData(value, chars) {
    if (value.trim().length < chars) {
        return true;
    }
    else {
        return false;
    };
};
function validateMail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const match = regEx.test(email);
    return match;
};

// Fun fact, i actually went in to understand RegEx during this CA so i knew what it meant. Not as complicated to write as i thought.. 