const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const addressInput = document.querySelector("#address");
const textareaInput = document.querySelector("#txtarea");
const hidden = document.querySelectorAll(".hidden");
// Using qsa so i can all the error p's in a array.
console.log(nameInput)
console.log(emailInput)
console.log(addressInput)
console.log(textareaInput)
console.log(hidden)


// Looked into MDN because event.preventdefault is decrepated by VSCode. Thats why im using a arrowfunction passing event. As i have used arrow functions before i do understand how they work. 

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Hello");

    if (validateData(nameInput.value, 1)) {
        hidden[0].style.display = "block";
        nameInput.style.border = "solid red 2px";
    }
    else {
        hidden[0].style.display = "none";
        nameInput.style.border = "none";
    };

    if (validateMail(emailInput.value)) {
        hidden[1].style.display = "none";
        emailInput.style.border = "none";
    }
    else {
        hidden[1].style.display = "block";
        emailInput.style.border = "solid red 2px";
    };

    if (validateData(addressInput.value, 24)) {
        hidden[2].style.display = "block";
        addressInput.style.border = "solid red 2px";
    }
    else {
        hidden[2].style.display = "none";
        addressInput.style.border = "none";
    };

    if (validateData(textareaInput.value, 9)) {
        hidden[3].style.display = "block";
        textareaInput.style.border = "solid red 2px";
    }
    else {
        hidden[3].style.display = "none";
        textareaInput.style.border = "none";
    };

});

function validateData(value, chars) {
    if (value.trim() < chars) {
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