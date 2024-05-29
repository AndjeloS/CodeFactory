let children = Math.floor((Math.random() * 8) + 1);

let partnerName = ["Jacob", "Maria", "Tommy", "Sarah", "Mark", "Elena"];

let geoLocation = ["Austria", "France", "USA", "Australia", "Spain", "Canada"];

let jobTitle = ["Programmer", "Engineer", "Taxi Driver", "Lawyer", "Politician", "Cook"];

let randomPartnerName = partnerName[(Math.floor(Math.random() * partnerName.length))];

let randomLocation = geoLocation[(Math.floor(Math.random() * geoLocation.length))];

let randomJob = jobTitle[(Math.floor(Math.random() * jobTitle.length))];

console.log(`You will be a ${randomJob} in ${randomLocation}, and married to ${randomPartnerName}
with ${children} kids.`);