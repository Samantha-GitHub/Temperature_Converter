const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (event) {

        let value = parseFloat(event.target.value);
        /* console.log(value); */

        switch (event.target.name) {
            case "celsius":

                /* To convert temperatures in Celsius to Fahrenheit, multiply by 1.8 and add 32. */

                fahrenheit.value = (value * 1.8) + 32;

                break;

            case "fahrenheit":
                /* To convert temperatures in Fahrenheit to Celsius, subtract 32 and dive by 1.8  */


                celsius.value = (value - 32) / 1.8;
                break;

            default:
                break;
        }
    })
}
