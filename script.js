/** @format */

let array = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  let developers = array.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  array.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  let newEmployee = {id:4,name:"susan",age:"20",profession:"intern"}
  array.push(newEmployee);
  console.log(array);
}

function removeAdmin() {
  let updatedArray = array.filter((employee) => {
    return employee.profession !== "admin";
  });
  console.log(updatedArray);
}

function concatenateArray() {
  let newArray = [
    { id: 5, name: "raj", age: "22", profession: "developer" },
    { id: 6, name: "saurabh", age: "23", profession: "intern" },
    { id: 7, name: "akash", age: "25", profession: "developer" },
  ];
  let concatenatedArray = array.concat(newArray);
  console.log(concatenatedArray);
}
