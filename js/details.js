const detailsContainer = document.querySelector(".card-containers__details");
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);

const id = parameters.get("name");
const API_URL = "https://anime-facts-rest-api.herokuapp.com/api/v1/" + id;

async function getFacts () {

    try {
        const response = await fetch(API_URL);
        const json = await response.json();
        const arrayData = json.data;
        
        detailsContainer.innerHTML = "";

        let image = json.img;
        let name = id.replace(/_/g, " ");
        let returnedFacts = "";
        arrayData.forEach(fact => {
            returnedFacts += "<p>" + fact.fact_id + ": " + fact.fact + "</p>";
        });

        detailsContainer.innerHTML += `
        <div class="card">
            <img src="${image}" alt="Image of ${name}">
            <h2>${name}</h2>
            <div class="facts">
            ${returnedFacts}</div>
        </div>
        `;
    }
    catch(error) {
        detailsContainer.innerHTML = `
        <div class="errorHandling">
            <h2>Error loading the current data</h2>
            <p>${error}</p>
        </div>
        `
    };
};

getFacts();