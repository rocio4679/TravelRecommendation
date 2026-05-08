const btnSearch = document.getElementById('search');

function FetchTravelAPI() {
    const Keyword = document.getElementById('navbar').value;
    var RetKeyWord; 

    RetKeyWord = KeywordSearch(Keyword);    

    if(RetKeyWord != "error") 
    {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                console.log(data.filter(item => item.Keyword)); 
                console.log(data);
                 //Sample continue here
                 const filtered = data.filter(user => 
  user.name.toLowerCase().includes(searchTerm.toLowerCase())
);
            })
            .catch(error => {
                console.error("Error: ", error);
                console.log("An error occurred!");
            })
    }
    else {
        alert("Please select a Valid Keyword!");
    }
}

btnSearch.addEventListener('click', FetchTravelAPI);

function KeywordSearch(Keyword) {
    var ReturnKeyword;
    const KeyText = Keyword.toLowerCase(); 

    if(KeyText.substring(0, 5) === "beach")
    {
        ReturnKeyword = "beaches";
    } else {
        if(KeyText === "country" || KeyText === "countries")
        {
            ReturnKeyword = "countries";
        }   else {
                if(KeyText.substring(0, 6) === "temple")
                {
                    ReturnKeyword = "temples";
                } else {
                    ReturnKeyword = "error"; 
                }
            } 
        }

    console.log(ReturnKeyword);
    return ReturnKeyword;  
}

function ClearResults() {

}