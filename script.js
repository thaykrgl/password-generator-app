// PASSWORD LENGTH INPUT AND LABEL
const passwordLength = document.querySelector("#password-length")
const input = document.querySelector("#range")

passwordLength.textContent = input.value
input.addEventListener("input", (event) => {
    passwordLength.textContent = event.target.value
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