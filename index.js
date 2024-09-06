const apiKey = '';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const location = data.name;

    // Update the HTML elements with the API data
    locationElement.innerHTML = location;
    temperatureElement.innerHTML = Math.round(temperature);
    humidityElement.innerHTML = description.charAt(0).toUpperCase() + description.slice(1); 
  })
  .catch(error => {
    console.error('Error:', error);
  });

