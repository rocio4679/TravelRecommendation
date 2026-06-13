const btnSearch = document.getElementById('search');
const btnClear = document.getElementById('clear');
const navbarID = document.getElementById('navbar');
const resultDiv = document.getElementById('result');
//const textResultDiv = document.getElementById('textResult');
const introDiv = document.getElementById('DivIntro');
const ArrayResults = []; 

function FetchTravelAPI() {
    const Keyword = document.getElementById('navbar').value;
    var RetKeyWord; 

    if(RetKeyWord != "error")
    {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                resultDiv.innerHTML += `<br>`;
                resultDiv.innerHTML += `<h2 style="color: white">Search Results:</h2>`;

                //Figure out Cities
                if(Keyword.toLowerCase() === "australia") {
                    console.log(data.countries[0].cities);

                    const citiesArray = data.countries[0].cities; 

                    for(const item of citiesArray)
                    {
                        const city = item.name;
                        const cityText = item.description; 
                        const cityName = city.substring(0, city.indexOf(","));
                        console.log(cityName);

                        //Display images here
                        //resultDiv.innerHTML += `<div class="card">`;
                        resultDiv.innerHTML += `<img src="${cityName}.png" width="450px" height="300px">`;
                        resultDiv.innerHTML += `<div id="${cityName}div" class="newlyCreated"><p style="color: black" class="restext">${cityText}</p></div>`;
                        //resultDiv.innerHTML += `</div>`;  
                        
                        resultDiv.style.gridTemplateColumns = "repeat(2, 1fr)";
                        resultDiv.style.gap = "16px";
                
                        resultDiv.style.display = "grid"; 
                        introDiv.innerHTML = "";
                    }
                } 

                if(Keyword.toLowerCase() === "japan") {
                    console.log(data.countries[1].cities);
                    
                    const citiesArray = data.countries[1].cities; 
                    
                    resultDiv.innerHTML = "";
//                    resultDiv.innerHTML += `<br>`;

                    for(const item of citiesArray)
                    {
                        const city = item.name;
                        const cityName = city.substring(0, city.indexOf(","));
                        console.log(cityName);

                        //Display images here
                        //resultDiv.innerHTML += `<br>`
                        resultDiv.innerHTML += `<img src="${cityName}.png" width="400px" height="280px">`;
                        introDiv.innerHTML = "";//Display images here
                        
                    }
                }

                if(Keyword.toLowerCase() === "brazil") {
                    console.log(data.countries[2].cities);

                    const citiesArray = data.countries[2].cities; 
                    
                    resultDiv.innerHTML = ""; 
  //                  resultDiv.innerHTML += `<br>`;
                    for(const item of citiesArray)
                    {
                        const city = item.name;
                        const cityName = city.substring(0, city.indexOf(","));
                        console.log(cityName);

                        //Display images here
                        resultDiv.innerHTML += `<img src="${cityName}.png" width="450px" height="300px">`;
                        introDiv.innerHTML = "";
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

    //            resultDiv.innerHTML += `<br><br>`;
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