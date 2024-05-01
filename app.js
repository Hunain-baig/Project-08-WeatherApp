const form = document.querySelector("#form");
const userInput = document.querySelector("#userInput");
const div = document.querySelector("#div");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  axios(
    `http://api.weatherapi.com/v1/current.json?key=9918c16868c74be0a41142148240105&q=${userInput.value}`
  )
    .then((res) => {
      console.log(res.data);
      div.innerHTML = `
        <div id="div2">
        <h2>Country : ${res.data.location.country}</h2>
        <h2>City: ${res.data.location.name}</h2>
        <h2>State: ${res.data.location.region}</h2>
        <h2>Region : ${res.data.location.region}</h2>
        <h2>Local Time : ${res.data.location.localtime}</h2>
        <h2>Temperature: ${res.data.current.temp_c}°C</h2>
        <h2>Temperature: ${res.data.current.temp_f}°F</h2>
        <h2>Humidity : ${res.data.current.humidity}</h2>
        <h2>Wind Speed In Km/h : ${res.data.current.wind_kph}</h2>
        <img src="${res.data.current.condition.icon}" alt="icon">
        </div>
        `;
    })
    .catch((error) => {
      console.log(error);
    });

  userInput.value = "";
});
