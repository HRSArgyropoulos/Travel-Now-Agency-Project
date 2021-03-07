//JSON data fetch
fetch("assets/destinations-data.json")
.then(response => response.json())
.then(destinations => {
    destinations.forEach(destination => {
        const data = destination.data;
        //console.log(data);
        const fields = document.querySelectorAll(`#${destination.location} .display-dest-content > li`); //get info/schedule/dates/prices field to insert data
        console.log(fields);
        //Info field [0]
        dataInfo(data.info, fields[0]);
        dataSchedule(data.schedule, fields[1]);

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
        const dayText = document.createElement("span");
        dayText.innerText = data[day-1];
        console.log(dayText);
        li.appendChild(dayTitle);
        li.appendChild(dayText);
    }
}