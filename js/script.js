const API_URL = "https://anime-facts-rest-api.herokuapp.com/api/v1";
const cardContainer = document.querySelector(".card-containers");

async function getFacts () {

    try {
        const response = await fetch(API_URL);
        const json = await response.json();
    
        const arrayData = json.data;
        cardContainer.innerHTML = "";
        for (let i = 0; i < arrayData.length; i++) {
            let name = arrayData[i].anime_name;
            let displayName = name.replace(/_/g, " ");
            let img = arrayData[i].anime_img;
            let id = arrayData[i].anime_id;

            cardContainer.innerHTML += `
            <a href="details.html?name=${name}" class="card">
                <img src="${img}" alt="Image of ${displayName}">
                <h2>${displayName}</h2>
                <p>Id: ${id}</p>
            </a>
            `;
        }    
        console.log(arrayData);
    }
    catch(error) {
        cardContainer.innerHTML = `
        <div class="errorHandling">
            <h2>Error loading the current data</h2>
            <p>${error}</p>
        </div>
        `
    };
};

getFacts();

