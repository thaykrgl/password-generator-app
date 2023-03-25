// DOM ELEMENTS
let rangeInput = document.getElementById("range");
var checkboxes = document.querySelectorAll(".preference-checkbox");
let strengthText = document.getElementById("strength-text");
let strengthTracker = document.getElementById("strength-tracker");
let passwordButton = document.getElementById("password-button");
let strengthLevel = 3;


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


// ARRAY SHUFFLE
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}


// PASSWORD GENERATION
passwordButton.addEventListener("click", function () {
    let password = Math.random().toString(36).slice(2, 7) +
        Math.random().toString(36)
        .toUpperCase().slice(2, 7);

    password = password.shuffle();

    console.log(password);
})