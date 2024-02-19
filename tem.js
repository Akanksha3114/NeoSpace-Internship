function validateInput() {
    const temperatureInput = document.getElementById('temperature').value;
    const isValidNumber = !isNaN(temperatureInput) && temperatureInput !== '';
  
    if (!isValidNumber) {
      alert('Please enter a valid number for temperature.');
      document.getElementById('temperature').value = '';
    }
  }
  
  function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const selectedUnit = document.getElementById('unit').value;
    let result;
  
    if (selectedUnit === 'celsius') {
      result = convertToCelsius(temperatureInput);
    } else if (selectedUnit === 'fahrenheit') {
      result = convertToFahrenheit(temperatureInput);
    } else if (selectedUnit === 'kelvin') {
      result = convertToKelvin(temperatureInput);
    }
  
    document.getElementById('result').textContent = `Converted Temperature: ${result.toFixed(2)} ${selectedUnit.toUpperCase()}`;
  }
  
  function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function convertToKelvin(celsius) {
    return celsius + 273.15;
  }
  