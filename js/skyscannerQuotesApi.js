"use strict";

const SKYURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices"; //skyscanner api base url

const requestQuotes = (location,url) => { //get quote(s) for a specific location
    flightPromises.push(    //push promise into flightPromises array - see getQuotes function
    fetch(url, {    //request quotes from api
        "method" : "GET",
        "headers" : {
            "x-rapidapi-key": "a8ad4f7fedmshc135d85aa401bc8p106b6bjsna3d6d4d974bf",
            "x-rapidapi-host" : "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "Accept" : "application/json" //return data in json formal (xml also available)
        }
    })
    .then(response => response.json())
    .then(flights => {
        //console.log(flights);
        let flightsList = document.querySelector(`#${location} .flightQuotes ul`); //get list to add flight quotes
        flights.Quotes.forEach(quote => {
            let quoteLi = document.createElement("li"); //n-th quote
            //Origin
            let departureIcon = document.createElement("i");
            departureIcon.classList.add("fas","fa-plane-departure");
            quoteLi.appendChild(departureIcon);
            let originLi = document.createElement("span");
            originLi.innerText = quoteQuery.originPlace;
            quoteLi.appendChild(originLi);
            //Destination
            let arrivalIcon = document.createElement("i");
            arrivalIcon.classList.add("fas","fa-plane-arrival");
            quoteLi.appendChild(arrivalIcon);
            let destinationLi = document.createElement("span");
            destinationLi.innerText = quoteQuery.destinationPlace;
            quoteLi.appendChild(destinationLi);
            //Minimum Price
            let priceLi = document.createElement("span");
            priceLi.innerText = quote.MinPrice + " ₤"; //can also get it from Quote currency object
            quoteLi.appendChild(priceLi);

            flightsList.appendChild(quoteLi); //and quote to flighs list
        });
    })
    );

}

const quoteQuery = { //CONST QUOTE INFO
    "country" : "UK",
    "currency" : "GBP",
    "locale" : "en-GB",
    "originPlace" : "LHR", // IATA format
    "destinationPlace" : "", // IATA format - this value will change depending on the destination
    "outboundPartialDate" : "2021-03-11", //YYYY-MM-DD format - for now we ll leave it as is
    "inboundPartialDate" : "" // empty for one-way (OPTIONAL) - this value will change depending on the destination (days of package)
}

const flightPromises = []; //will hold all of our promises from fetch requests to the skyscanner api


const getQuotes = (destination) => {
    const tab = document.querySelector(`#${destination.location} nav ul li:last-child`); //price tab of destination
        tab.addEventListener("click", () => {
            if (document.querySelector(`#${destination.location} .flightQuotes ul`).innerHTML===""){ //if list is empty (no results added yet)
                Promise.allSettled(flightPromises).then(() => { //ensure that the previous fetch requests have been "fullfilled" - wait / async
                    let quoteURL = SKYURL + "/browsequotes/v1.0"; //quotes endpoint
                    quoteQuery.destinationPlace = `${destination.iata}`;
                    let outboundDay = parseInt(quoteQuery.outboundPartialDate.slice(8,10))+destination.days; //get "DD" from date and add the days from the destination data
                    //here for simplicity we wont check if the date created will be valid
                    quoteQuery.inboundPartialDate = quoteQuery.outboundPartialDate.slice(0,8)+outboundDay; // get "YYYY-MM-" and concatenate it with "DD"
                    for (const parameter in quoteQuery) { //create url from which to fetch - we could do part of this outside of getQuotes
                        quoteURL += `/${quoteQuery[parameter]}`;
                    }
                    requestQuotes(destination.location,quoteURL);
                })
            }
        });
};


fetch("./destinations-data.json") //get destinations data (JSON)
.then(response => response.json())
.then(destinations => {
    for (const destination of destinations) {
        getQuotes(destination)
    };
});


