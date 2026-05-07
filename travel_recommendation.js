const btnSearch = document.getElementById('search');

function FetchTravelAPI() {
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            console.error("Error: ", error);
            console.log("An error occurred!");
        })
}

btnSearch.addEventListener('click', FetchTravelAPI);

function KeywordSearch(Keyword) {
    const KeyText = Keyword.toLowerCase(); 
}

function ClearResults() {

}