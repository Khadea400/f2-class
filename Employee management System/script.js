const employees = [
    {
        name: "arvind",
        role: "SDE",
        salary: 100,
        PhoneNumber: "9988224488",
        email: "arvind@gmail.com",
        companyName: "Acciojob"
    },
    {
        name: "akshay",
        role: "SDE",
        salary: 100,
        PhoneNumber: "9987233257",
        email: "ak@gmail.com",
        companyName: "Acciojob"
    }
]

const tbody = document.getElementsByClassName("tbody");

let employeeId = 1000;

function addEmployee(employeeObj){ //add the new employee into the table

    const tr = document.createElement("tr");
    const employeeIdCell = document.createElement("td");
    employeeIdCell.innerText = employeeId++;
    tr.appendChild(employeeIdCell);

    for (let key in employeeObj){
        const cell = document.createElement("td");
        cell.innerText = employeeObj[key];
        tr.appendChild(cell);
    }
    tbody.appendChild(tr);
}


employees.forEach( (emp) => {
    addEmployee(emp)
})

function ak(e) {
    console.log("system.out");
    }
e();
