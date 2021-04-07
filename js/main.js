const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const alert = document.getElementById("alert");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (event) {


        let value = parseFloat(event.target.value);
        const onePointHeight = 1.8;
        const twentyTwo = 32;
        const regExpNoLetters = /[^a-z]/gm;



        if (regExpNoLetters.test(celsius.value) || regExpNoLetters.test(fahrenheit.value)) {

            alert.style.display = 'none';

            switch (event.target.name) {
                case "celsius":

                    //To convert temperatures in Celsius to Fahrenheit, multiply by 1.8 and add 32.

                    fahrenheit.value = (value * onePointHeight) + twentyTwo;

                    break;

                case "fahrenheit":

                    //To convert temperatures in Fahrenheit to Celsius, subtract 32 and dive by 1.8 


                    celsius.value = (value - twentyTwo) / onePointHeight;
                    break;


            }


        } else {
            alert.style.display = 'block';
        }
    })
}
