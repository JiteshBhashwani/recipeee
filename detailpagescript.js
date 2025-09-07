const dishName = document.querySelector("#dish-name");
const dishImage = document.querySelector("#dish-image");
const details = document.querySelector("#details");
const youtubeLink = document.querySelector("#youtube-link");
const ingredients = document.querySelector("#ingredients");
const ingredientNames = document.querySelector("#ingredient-name");
const ingredientQtys = document.querySelector("#ingredient-qty");
const recipe = document.querySelector("#recipe");

const loadui = (dish) => {
  console.log(dish);

  dishName.innerHTML = dish.strMeal;
  dishImage.setAttribute("src", dish.strMealThumb);
  youtubeLink.setAttribute("href", dish.strYoutube);
  for (let index = 0; index < 20; index++) {
    if (!dish[`strIngredient${index + 1}`]) continue;

    const ingredientName = document.createElement("li");
    ingredientName.innerHTML = dish[`strIngredient${index + 1}`];

    const ingredientQty = document.createElement("li");
    ingredientQty.innerHTML = dish[`strMeasure${index + 1}`];

    ingredientNames.appendChild(ingredientName);
    ingredientQtys.appendChild(ingredientQty);
  }
  recipe.innerHTML = dish.strInstructions;
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id"); // "42"

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((res) => res.json())
  .then((json) => loadui(json.meals[0]));
