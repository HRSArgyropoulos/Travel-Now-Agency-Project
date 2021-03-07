//JSON data fetch
fetch("assets/destinations-data.json")
.then(response => response.json())
.then(destinations => {
    destinations.forEach(destination => {
        const data = destination.data;
        const fields = document.querySelectorAll(`#${destination.location} .display-dest-content > li`); //get info/schedule/dates/prices field to insert data
        //console.log(fields);
        dataInfo(data.info, fields[0]);
        dataSchedule(data.schedule, fields[1]);
        dataDates(data.dates,fields[2]);
        dataPrices(destination.price, fields[3]);
    });
});

const dataInfo = (data, li) => {
    data.forEach(paragraph => {
        const p = document.createElement("p");
        p.innerText = paragraph;
        li.appendChild(p);
    })
}

const dataSchedule = (data, li) => {
    for (let day = 1; day<data.length; day++) {
        const dayTitle = document.createElement("h3");
        dayTitle.innerText = `Day ${day}`;
        li.appendChild(dayTitle);

        const dayText = document.createElement("span");
        dayText.innerText = data[day-1];
        li.appendChild(dayText);
    }
}

const dataDates = (data,li) => {
    const title = document.createElement("h3");
    title.innerText = "Leaving:";
    li.appendChild(title);

    const content = document.createElement("span");
    content.innerText = data.join(', ');
    li.appendChild(content);
}

const dataPrices = (data, li) => {
    const title = document.createElement("h3");
    title.innerText = `Starting from ${data} £`;
    li.appendChild(title);

    const excludingText = document.createElement("span");
    excludingText.innerHTML = "<u>Excluding:</u>";
    li.appendChild(excludingText);

    const exludingList = document.createElement("ul");
    exludingList.innerHTML = `
    <li>VAT 24%</li>
    <li>Airtickets</li>
    <li>Other fees</li>`
    li.appendChild(exludingList);
}