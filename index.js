const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("Fahrenheit");
const kelvinInput = document.getElementById("Kelvin");

celsiusInput.addEventListener("input", updateTemperatures);
fahrenheitInput.addEventListener("input", updateTemperatures);
kelvinInput.addEventListener("input", updateTemperatures);

function updateTemperatures() {
  const celsius = parseFloat(celsiusInput.value) || 0;
  const fahrenheit = parseFloat(fahrenheitInput.value) || 0;
  const kelvin = parseFloat(kelvinInput.value) || 0;

  const celsiusToFahrenheit = (celsius * 9/5) + 32;
  const fahrenheitToCelsius = (fahrenheit - 32) * 5/9;
  const celsiusToKelvin = celsius + 273.15;
  const kelvinToCelsius = kelvin - 273.15;
  const fahrenheitToKelvin = (fahrenheit - 32) * 5/9 + 273.15;
  const kelvinToFahrenheit = (kelvin - 273.15) * 9/5 + 32;

  if (!isNaN(celsius)) {
    fahrenheitInput.value = celsiusToFahrenheit.toFixed(2);
    kelvinInput.value = celsiusToKelvin.toFixed(2);
  } else if (!isNaN(fahrenheit)) {
    celsiusInput.value = fahrenheitToCelsius.toFixed(2);
    kelvinInput.value = fahrenheitToKelvin.toFixed(2);
  } else if (!isNaN(kelvin)) {
    celsiusInput.value = kelvinToCelsius.toFixed(2);
    fahrenheitInput.value = kelvinToFahrenheit.toFixed(2);
  }
}

btn.addEventListener("click", ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})