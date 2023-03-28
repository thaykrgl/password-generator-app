// DOM ELEMENTS
let rangeInput = document.getElementById("range");
var checkboxes = document.querySelectorAll(".preference-checkbox");
let strengthText = document.getElementById("strength-text");
let strengthTracker = document.getElementById("strength-tracker");
let passwordButton = document.getElementById("password-button");
let generatedPassword = document.getElementById("generated-password");
let strengthLevel = 3;
let chars = "";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var password = "";


// PASSWORD LENGTH INPUT AND LABEL
const length = document.querySelector("#password-length");
const input = document.querySelector("#range");

length.textContent = input.value
input.addEventListener("input", (event) => {
    length.textContent = event.target.value
})

// PASSWORD SELECTED VALUE BACKGROUND
const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('.password-length');

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)


// PASSWORD STRENGTH
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            strengthLevel++;
        } else {
            strengthLevel--;
        }
        strengthTracker.className = "";
        strengthTracker.classList.add("strength-tracker");
        switch (strengthLevel) {
            case 1:
                strengthText.innerHTML = "TOO WEAK!"
                strengthTracker.classList.add("bg-too-weak");
                break;
            case 2:
                strengthText.innerHTML = "WEAK"
                strengthTracker.classList.add("bg-weak");
                break;
            case 3:
                strengthText.innerHTML = "MEDIUM"
                strengthTracker.classList.add("bg-medium");
                break;
            case 4:
                strengthText.innerHTML = "STRONG"
                strengthTracker.classList.add("bg-strong");
                break;
            default:
                strengthText.innerHTML = "HACKABLE!!!"
                strengthTracker.classList.add("bg-none");
        }
    })
});


// PASSWORD GENERATION
passwordButton.addEventListener("click", function () {
    let passwordLength = document.getElementById("password-length").innerHTML;
    chars = "";
    password = "";
    switch (strengthLevel) {
        case 1:
            chars += upperCase;
            break;
        case 2:
            chars += upperCase + lowerCase;
            break;
        case 3:
            chars += upperCase + lowerCase + number;
            break;
        case 4:
            chars += upperCase + lowerCase + number + symbol;
            break;
        default:
    }

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    generatedPassword.innerHTML = password;
})