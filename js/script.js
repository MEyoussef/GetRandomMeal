// https://www.themealdb.com/api/json/v1/1/random.php
let Api = "https://www.themealdb.com/api/json/v1/1/random.php";
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    fetch(Api).then((data) => data.json()).then((data) => {
        document.querySelector("img").src = `${data.meals[0].strMealThumb}`;
        document.querySelector("h3").innerText = `${data.meals[0].strMeal}`;
        document.querySelector(".meal-id").innerText = `${data.meals[0].idMeal}`;
        document.querySelector(".category").innerText = `category : ${data.meals[0].strCategory}`;
        document.querySelector(".area").innerText = `area : ${data.meals[0].strArea}`;
        document.querySelector(".tags").innerText = `tags : ${data.meals[0].strTags}`;
        if (data.meals[0].strTags === null) {
            document.querySelector(".tags").innerText = `tags : no tags`;
        }
    });
})