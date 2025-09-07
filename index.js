const searchcontainer = document.querySelector("#search-container");
const searchinput = document.querySelector("#search-input");
const searchbutton = document.querySelector("#search-button");
const container = document.querySelector("#cointainer");
searchinput.focus();

searchcontainer.onclick = () => {
  searchinput.focus();
};

const createcard = (title, id, imglink) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `          
          <img class="dish-img" src="${imglink}" alt="img" />
          <h2 class="dish-name">${title}</h2>`;
  card.onclick = () => {
    window.location.href = `dish.html?id=${id}`;
  };
  return card;
};

const loadui = (responce) => {
  container.innerHTML = "";
  responce.meals.forEach((element) => {
    container.appendChild(
      createcard(element.strMeal, element.idMeal, element.strMealThumb)
    );
  });
};

searchinput.addEventListener("input", (event) => {
  event.preventDefault();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchinput.value}`
  )
    .then((responce) => responce.json())
    .then((json) => {
      loadui(json);
    });
});
