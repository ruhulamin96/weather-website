// load weather data
const loadWeather = async () => {
  let searchText = document.getElementById("searchText").value;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=0db1000d87da5bbb7550972d54a2ff2a`
  );
  const data = await response.json();
  document.getElementById("searchText").value = "";
  displayWeather(data);
};
// displayWeather
let setText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayWeather = (data) => {
  setText("temp", data.main.temp);
  setText("city", data.name);
  setText("weatherStatus", data.weather[0].main);
  const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.getElementById("weatherIcon").setAttribute("src", url);
};
