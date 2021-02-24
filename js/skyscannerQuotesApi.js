"use strict";

const SKYURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices";

const requestQuotes = (location,test) => {
    fetch(test, {
        "method" : "GET",
        "headers" : {
            "x-rapidapi-key": "a8ad4f7fedmshc135d85aa401bc8p106b6bjsna3d6d4d974bf",
            "x-rapidapi-host" : "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "Accept" : "application/json"
        }
    })
    .then(response => response.json())
    .then(flights => {
        console.log(flights);
        let flightsList = document.querySelector(`#${location} .flightQuotes ul`);
        flights.Quotes.forEach(quote => {
            let quoteLi = document.createElement("li");

            let departureIcon = document.createElement("i");
            departureIcon.classList.add("fas","fa-plane-departure");
            quoteLi.appendChild(departureIcon);

            let originLi = document.createElement("span");
            originLi.innerText = quoteQuery.originPlace;
            quoteLi.appendChild(originLi);

            let arrivalIcon = document.createElement("i");
            arrivalIcon.classList.add("fas","fa-plane-arrival");
            quoteLi.appendChild(arrivalIcon);

            let destinationLi = document.createElement("span");
            destinationLi.innerText = quoteQuery.destinationPlace;
            quoteLi.appendChild(destinationLi);

            let priceLi = document.createElement("span");
            priceLi.innerText = quote.MinPrice + " ₤";
            quoteLi.appendChild(priceLi);

            flightsList.appendChild(quoteLi);
        });
    })


}

const quoteQuery = { //QUOTE INFO
    "country" : "UK",
    "currency" : "GBP",
    "locale" : "en-GB",
    "originPlace" : "LHR", //LHR-iata
    "destinationPlace" : "", //AMS-iata
    "outboundPartialDate" : "2021-03-14", //YYYY-MM-DD
    "inboundPartialDate" : "" // empty for one-way OPTIONAL
}



const getQuotes = (destination) => {
    const tab = document.querySelector(`#${destination.location} nav ul li:last-child`);
        tab.addEventListener("click", () => {
            if (document.querySelector(`#${destination.location} .flightQuotes ul`).innerHTML===""){
                let quoteURL = SKYURL + "/browsequotes/v1.0"; //quotes endpoint
                quoteQuery.destinationPlace = `${destination.iata}`;
                for (const parameter in quoteQuery) {
                    quoteURL += `/${quoteQuery[parameter]}`;
                }
                requestQuotes(destination.location,quoteURL);
            }
        });
};


fetch("./destinations-data.json")
.then(response => response.json())
.then(destinations => {
    for (const destination of destinations) {
        getQuotes(destination)
    };
});


