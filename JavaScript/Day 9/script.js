// fetching JSON real life example
// sorting()

fetch("data.json") // https://api.serri.codefactory.live/random/
  .then((response) => response.json()) // fetch the data from JSON type (string) to an object (JSON.parse())
  .then((data) => {
    for (let val of data) {
      document.getElementById("result").innerHTML += `<p>${val.name}</p>`;
    }
  });

// API JSON

// frontend tech
// NodeJs
// send a request with fname and lname
// backend will procces and insert in the database
