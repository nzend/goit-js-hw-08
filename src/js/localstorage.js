console.log(localStorage);
localStorage.setItem("my-data", JSON.stringify({ user: "Mango", age: 5 }))
const savedData = localStorage.getItem("my-data");
console.log("Data", savedData);
const parsedData = JSON.parse(savedData)
console.log("Parsed Data",parsedData);