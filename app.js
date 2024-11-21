// YOUR JS CODE HERE
document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherData = data;
      document.getElementById('temperature').innerText = `${weatherData.current.temperature_2m} °C`;
      document.getElementById('wind-speed').innerText = `Wind Speed: ${weatherData.current.wind_speed_10m} km/h`;
      document.getElementById('timezone').innerText = `${data.timezone}`;

      const options = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
      };
      document.getElementById('time').innerText = `Last updated: ${new Date(weatherData.current.time).toLocaleString('en-GB', options)}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));
});