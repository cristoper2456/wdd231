const lat = "18.54";
const lon = "-69.88";
const apiKey = "106162b7a8fe33b59e6cc74f60929ef9";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const weatherData = await response.json();
            displayWeather(weatherData); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const currentWeatherDiv = document.querySelector(".current-weather");
    const forecastDiv = document.querySelector(".forecast");

    const current = data.list[0];
    const temp = Math.round(current.main.temp);
    const description = current.weather[0].description;
    const iconCode = current.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    currentWeatherDiv.innerHTML = `
        <img src="${iconUrl}" alt="${description}">
        <p><strong>${temp}°C</strong> - ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
    `;

    const forecastList = [data.list[8], data.list[16], data.list[24]];
    
    let forecastHTML = "<h3>3-Day Forecast</h3><ul>";
    forecastList.forEach(item => {
        const date = new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: 'short' });
        const dayTemp = Math.round(item.main.temp);
        forecastHTML += `<li>${date}: <strong>${dayTemp}°C</strong></li>`;
    });
    forecastHTML += "</ul>";

    forecastDiv.innerHTML = forecastHTML;
}

getWeather();