const btnSearch = document.getElementById('search');
const btnClear = document.getElementById('clear');
const navbarID = document.getElementById('navbar');
const ArrayResults = []; 

function FetchTravelAPI() {
    const Keyword = document.getElementById('navbar').value;
    var RetKeyWord; 

    if(RetKeyWord != "error")
    {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                //Sample continue here
                console.log(data);

                if(Keyword === "countries") {
                    //Currently just fetching the first country, take care of that
                    console.log(data.countries.find(item => item.name.toLowerCase()));
                }

                if(Keyword === "beaches") {
                    console.log(data.beaches.find(item => item.name.toLowerCase()));
                }

                if(Keyword === "temples")
                {
                    console.log(data.temples.find(item => item.name.toLowerCase()));
                }
                //console.log(data.countries.find(item => item.name.toLowerCase()));

                //const result1 = data.countries.find(item => item.name.toLowerCase() === "Australia");
                //const result2 = data.countries.find(item => item.name.toLowerCase());

                //const result2 = result1.cities.join(', ');

                //console.log(result2.name); 
                //console.log(result);
                //console.log(filtered); 
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
btnClear.addEventListener('click', ClearResults);
navbarID.addEventListener('click', ClearNavBar);

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

function ClearNavBar() {
    navbarID.value = ""; 
}

function ClearResults() {
    ClearNavBar(); 
}