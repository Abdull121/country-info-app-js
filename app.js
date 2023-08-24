var input = document.getElementById("input");
var box = document.getElementById("country-box");
var error = document.getElementById("alert");

document.getElementById("search").addEventListener("click", () => {
  var Name = input.value;
  // console.log(search)
  let url = `https://restcountries.com/v3.1/name/${Name}?fullText=true`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      // fetch the data with the help of console.log
      // console.log(result)
      // console.log((result[0].flags.png))
      // console.log(result[0].name.common)
      // console.log(result[0].capital[0])
      // console.log(c)
      // console.log(result[0].population)
      // console.log(Object.keys(result[0].currencies))
      // console.log(Object.values(result[0].languages).toString())

      if (!result[0].flags.svg) return; // if img not showing then return
      var container = `
        <div class="image">
        <img src="${result[0].flags.svg}" alt="img">
        </div>
    <h1>${result[0].name.common}</h1>
    <div class="content">
       
        <p>Capital:   ${result[0].capital[0]}</p>
        <p>Continent: ${result[0].continents}</p>
        <p>Currency:  ${Object.keys(result[0].currencies)}</p>
        <p>Population: ${result[0].population.toString()}</p>
        <p>Language:  ${Object.values(result[0].languages).toString()}</p>
        
    </div>`;
      box.innerHTML = container;
    })
    .catch(function () {
      console.log("cannot fetch data");
      error.textContent = "correct name or lowercase";
    });

  input.value = "";
  error.textContent = ""; // by default empty string in <span>
});
