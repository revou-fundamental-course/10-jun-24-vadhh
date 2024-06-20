document.addEventListener('DOMContentLoaded', function() {
    const celciusInput = document.querySelector('.celcius-container textarea');
    const fahrenheitResult = document.querySelector('.result-container textarea');
    const konversiButtons = document.querySelectorAll('.button');
    const calculateTextarea = document.querySelector('.calculate-container textarea');

    // Function to convert Celcius to Fahrenheit
    function celciusToFahrenheit(celcius) {
        return (celcius * 9/5) + 32;
    }

    // Function to convert Fahrenheit to Celcius
    function fahrenheitToCelcius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    // Function to display conversion formula
    function displayConversionFormula() {
        const celciusToFahrenheitFormula = 'Fahrenheit = (Celcius × 9/5) + 32';

        const formulaText = `
        ${celciusToFahrenheitFormula}
        `;

        calculateTextarea.value = formulaText;
    }

    // Event listeners for Konversi, Reset, and Reverse buttons
    konversiButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = button.textContent.trim().toLowerCase();
            
            switch (buttonText) {
                case 'konversi':
                    if (celciusInput.value.trim() !== '') {
                        let celciusValue = parseFloat(celciusInput.value);
                        if (!isNaN(celciusValue)) {
                            let fahrenheitValue = celciusToFahrenheit(celciusValue);
                            fahrenheitResult.value = fahrenheitValue.toFixed(2); // Display Fahrenheit rounded to 2 decimal places
                            displayConversionFormula(); // Display conversion formula
                        } else {
                            alert('Masukkan nilai suhu derajat Celcius yang valid.');
                        }
                    } else {
                        alert('Masukkan nilai suhu derajat Celcius.');
                    }
                    break;

                case 'reset':
                    celciusInput.value = '';
                    fahrenheitResult.value = '';
                    calculateTextarea.value = ''; // Clear conversion formula textarea
                    break;

                case 'reverse':
                    if (fahrenheitResult.value.trim() !== '') {
                        let fahrenheitValue = parseFloat(fahrenheitResult.value);
                        if (!isNaN(fahrenheitValue)) {
                            let celciusValue = fahrenheitToCelcius(fahrenheitValue);
                            celciusInput.value = celciusValue.toFixed(2); // Display Celcius rounded to 2 decimal places
                            displayConversionFormula(); // Display conversion formula
                        } else {
                            alert('Masukkan nilai suhu derajat Fahrenheit yang valid.');
                        }
                    } else {
                        alert('Masukkan nilai suhu derajat Fahrenheit.');
                    }
                    break;
                
                default:
                    break;
            }
        });
    });
});
