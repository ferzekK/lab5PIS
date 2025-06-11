const apiKey = "287d338e5787377e8a650810ce619a3f";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Місто не знайдено");

    const data = await response.json();
    const weather = data.weather[0].main;
    const temp = data.main.temp;

    let message = `У місті ${city} зараз ${temp}°C, ${data.weather[0].description}. `;

    if (weather === "Rain" || weather === "Drizzle" || weather === "Thunderstorm") {
      message += "Візьміть з собою парасольку ☔";
    } else if (temp < 5) {
      message += "Одягніться тепліше 🧣";
    } else if (weather === "Clear") {
      message += "Не забудьте сонцезахисні окуляри 😎";
    } else {
      message += "Гарного вам дня!";
    }

    document.getElementById("weatherMessage").textContent = message;
  } catch (error) {
    document.getElementById("weatherMessage").textContent = "Помилка: " + error.message;
  }
}
