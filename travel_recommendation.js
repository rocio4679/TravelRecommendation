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
                
                //Figure out Cities
                if(Keyword.toLowerCase() === "australia") {
                    console.log(data.countries[0].cities);

                    const citiesArray = data.countries[0].cities; 
                    
                    for(const item of citiesArray)
                    {
                        const city = item.name;
                        const cityName = city.substring(0, city.indexOf(","));
                        console.log(cityName);

                        //Display images here

                        const cities = data.counties[0].cities.find(cityName => city.toLowerCase())

                        const condition = data.conditions.find(item => item.name.toLowerCase() === input);
                    }

                } 

                if(Keyword.toLowerCase() === "japan") {
                    console.log(data.countries[1].cities);

                    const citiesArray = data.countries[1].cities; 
                    
                    for(const item of citiesArray)
                    {
                        const city = item.name;
                        const cityName = city.substring(0, city.indexOf(","));
                        console.log(cityName);
                    }
                }

                if(Keyword.toLowerCase() === "brazil") {
                    console.log(data.countries[2].cities);

                    const citiesArray = data.countries[2].cities; 
                    
                    for(const item of citiesArray)
                    {
                        const city = item.name;
                        const cityName = city.substring(0, city.indexOf(","));
                        console.log(cityName);
                    }
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