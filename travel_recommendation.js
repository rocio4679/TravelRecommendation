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

                //Figure out Cities
                if(Keyword === "Australia") {
                    console.log(data.countries[0].cities);
                    for(const item in data.countries[0].cities) {
                        console.log(item.name);
                    }
                } 

                if(Keyword === "Japan") {

                }

                if(Keyword === "Brazil") {

                }

                if(Keyword === "countries") {
                    //Fetching all countries
                    console.log(data.countries);
                    
                    for(const item of data.countries) {
                        console.log(item.name);
                    }
                    
                }

                if(Keyword === "beaches") {
                    console.log(data.beaches);

                    for(const item of data.beaches) {
                        console.log(item.name);
                    }
                }

                if(Keyword === "temples")
                {
                    console.log(data.temples);

                    for(const item of data.temples) {
                        console.log(item.name); 
                    }
                }
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
                    if(KeyText.ToUpperCase() === "AUSTRALIA") {
                        ReturnKeyword = "Australia";
                    } else {
                        if (KeyText.ToUpperCase() === "JAPAN") {
                            ReturnKeyword = "Japan";
                        } else {
                            if (KeyText.ToUpperCase() === "BRAZIL") {
                                ReturnKeyword = "Brazil";
                            } else {
                                ReturnKeyword = "error";
                            }
                        }
                    }
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