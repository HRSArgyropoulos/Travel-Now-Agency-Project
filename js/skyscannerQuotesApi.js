"use strict";

const SKYURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices"; //skyscanner api base url

const requestQuotes = (location,url,date) => { //get quote(s) for a specific location
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
        console.log(flights);
        let flightsList = document.querySelector(`#${location} .flightQuotes ul`); //get list to add flight quotes

        //DATE
        const dateLi = document.createElement("h5");
        dateLi.innerText = date;
        flightsList.appendChild(dateLi);

        if (flights.Quotes.length === 0) {
            const li = document.createElement("span");
            li.innerText = "No flight prices found for this date. Try again later";
            li.style.color = "red";
            flightsList.appendChild(li);
        }

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
                    quoteQuery.destinationPlace = `${destination.iata}`;
                    /* destination.data.dates[0] */
                    //console.log(calculateDate("2021-02-28",10));
                    //console.log(convertDate("05/04/21"));
                    destination.data.dates.forEach(date => {
                        let quoteURL = SKYURL + "/browsequotes/v1.0"; //quotes endpoint
                        quoteQuery.outboundPartialDate = convertDate(date);
                        quoteQuery.inboundPartialDate = calculateDate(quoteQuery.outboundPartialDate, destination.days);
                        for (const parameter in quoteQuery) { //create url from which to fetch - we could do part of this outside of getQuotes
                            quoteURL += `/${quoteQuery[parameter]}`;
                        }
                        console.log(quoteURL);
                        requestQuotes(destination.location,quoteURL,date);
                    })
                })
            }
        });
};


fetch("assets/destinations-data.json") //get destinations data (JSON)
.then(response => response.json())
.then(destinations => {
    for (const destination of destinations) {
        getQuotes(destination)
    };
});

const calculateDate = (date,days) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate.toISOString().slice(0,10); //2011-10-05T14:48:00.000Z (get first 10 indexes of ISO format)
}

const convertDate = (date) => {
    //date format (DD/MM/YY) -> YYYY-MM-DD
    const dateArr = date.split("/");
    dateArr[2] = "20" + dateArr[2];
    console.log(dateArr);

    const swap = dateArr[0];
    dateArr[0] = dateArr[2];
    dateArr[2] = swap;
    console.log(dateArr);

    return (dateArr.join("-"));
}