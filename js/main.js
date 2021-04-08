const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const alert = document.getElementById('alert');
const inputs = Array.from(document.getElementsByTagName('input')); // This way you don't have to rely on the classes on the inputs

// Take these out of the loop, they are constants after all and won't change
const conversionRatio = 1.8; // somewhat more descriptive names for the constants
const freezingPoint = 32;
const regExpNoLetters = /[^a-z]/gm; // Multiline flag unnecessary on number input, actually letters too, case-sensitive / only lowercase etc.?

inputs.forEach((input) => { // Try to avoid the for loop this way
    input.addEventListener('input', ({ target: { value, name } }) => { // deconstruction
        if (regExpNoLetters.test(celsius.value) || regExpNoLetters.test(fahrenheit.value)) {
            alert.style.display = 'none';
            switch (name) {
                case 'celsius':
                    fahrenheit.value = (value * conversionRatio) + freezingPoint; // You don't really need to parse the value as you can see
                    break;
                case 'fahrenheit':
                    celsius.value = (value - freezingPoint) / conversionRatio;
                    break;
                default:
                    throw new Error('Only celsius or fahrenheit'); // Always add this for safety
            }
        } else {
            alert.style.display = 'block';
        }
    })
});
