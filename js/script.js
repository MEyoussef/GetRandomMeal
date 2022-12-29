// https://valorant-api.com/v1/agents
fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((data) => data.json()).then((data) => {
    // console.log(data)
    let btn = document.querySelector(".btn");
    btn.addEventListener('click', () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(res => {
                document.querySelector("h3").innerText = `${res.meals[0].strMeal}`;
                document.querySelector(".meal-name").innerText = `${res.meals[0].idMeal}`;
                document.querySelector("img").src = `${res.meals[0].strMealThumb}`
            })
    });
});