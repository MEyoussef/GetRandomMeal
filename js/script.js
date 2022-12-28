// api link https://www.themealdb.com/api/json/v1/1/random.php

// make a connection
let ApiConnection = new XMLHttpRequest();
ApiConnection.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php");
ApiConnection.send();
let json = JSON.parse(this.responseText);
console.log(json)