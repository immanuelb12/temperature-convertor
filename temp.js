function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

     
    if (inputValue < -273.15 && inputUnit === 'celsius') {
        alert('Temperature cannot be below absolute zero (-273.15°C)');
        return;
    } else if (inputValue < -459.67 && inputUnit === 'fahrenheit') {
        alert('Temperature cannot be below absolute zero (-459.67°F)');
        return;
    } else if (inputValue < 0 && inputUnit === 'kelvin') {
        alert('Temperature cannot be below absolute zero (0K)');
        return;
    }

    switch (inputUnit) {
        case 'celsius':
            celsius = inputValue;
            fahrenheit = (inputValue * 9/5) + 32;
            kelvin = inputValue + 273.15;
            break;
        case 'fahrenheit':
            celsius = (inputValue - 32) * 5/9;
            fahrenheit = inputValue;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            celsius = inputValue - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = inputValue;
            break;
    }

    document.getElementById('celsiusResult').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheitResult').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvinResult').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
}
