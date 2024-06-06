
let employee = `[{
    "id": 1,
    "fname": "Jason",
    "lname": "Born",
    "email": "jason.born@contoso.com",
    "jobTitle": "CEO",
    "salary": "15.000"
},{
    "id": 2,
    "fname": "Annete",
    "lname": "Born",
    "email": "annete.born@contoso.com",
    "jobTitle": "COO",
    "salary": "10.000"
},{
    "id": 3,
    "fname": "Max",
    "lname": "William",
    "email": "max.william@contoso.com",
    "jobTitle": "Manager Team 1",
    "salary": "7.000"
},{
    "id": 4,
    "fname": "Peter",
    "lname": "Schmidt",
    "email": "peter.schmidt@contoso.com",
    "jobTitle": "Manager Team 2",
    "salary": "7.000"
},{
    "id": 5,
    "fname": "James",
    "lname": "May",
    "email": "james.may@contoso.com",
    "jobTitle": "Worker Team 1",
    "salary": "4.000"
},{
    "id": 6,
    "fname": "Max",
    "lname": "Fury",
    "email": "max.fury@contoso.com",
    "jobTitle": "Worker Team 1",
    "salary": "4.000"
},{
    "id": 7,
    "fname": "Jennifer",
    "lname": "Streisand",
    "email": "jennifer.streisand@contoso.com",
    "jobTitle": "Worker Team 1",
    "salary": "4.000"
},{
    "id": 8,
    "fname": "Justin",
    "lname": "Fieber",
    "email": "justin.fieber@contoso.com",
    "jobTitle": "Worker Team 2",
    "salary": "4.000"
},{
    "id": 9,
    "fname": "Michael J.",
    "lname": "Ordan",
    "email": "michael.j.ordan@contoso.com",
    "jobTitle": "Worker Team 2",
    "salary": "4.000"
},{
    "id": 10,
    "fname": "Mark",
    "lname": "Fishbach",
    "email": "mark.fishbach@contoso.com",
    "jobTitle": "Worker Team 2",
    "salary": "4.000"
}]`;

let obj = JSON.parse(employee);

console.log(employee);


for (let val of obj) {
    document.getElementById("result").innerHTML += `
<table class="table" border="1">    
    <tr id="tableTitle">
        <th>Employee</th>
        <th>Info:</th>
    </tr>
        <td>${val.fname} ${val.lname} </td>
            <td>
                <dl>
                    <dt>Company ID: ${val.id}</dt>
                    <dt>Company E-Mail Adress: ${val.email}</dt>
                    <dt>Job Title: ${val.jobTitle}</dt>
                    <dt>Salary: ${val.salary}$</dt>
                </dl>
            </td>
</table>
`};

document.getElementById("details").innerHTML = `<button id="delete"> delete <button>`
document.getElementById("delete").addEventListener("click", removeElement);

function removeElement() {
    const element = document.getElementById("result")
    element.remove("result");
}