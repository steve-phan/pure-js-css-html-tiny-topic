const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
const app = document.getElementById('app');
const showMealSection = document.getElementById('show-meal');
const btnGetMeal = document.getElementById('get-meal');

const showMeal = (data) => {
  const meal = data.meals[0];

  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strTags,
    strCategory,
    strSource,
    strYoutube,
    strArea,
  } = meal;
  let mealIngredient = [];
  for (let i = 1; i < 21; i++) {
    if (meal[`strIngredient${i}`]) {
      let ingredient = meal[`strIngredient${i}`];
      mealIngredient = [
        ...mealIngredient,
        `${ingredient}: ${meal[`strMeasure${i}`]}`,
      ];
    }
  }

  let innerHTML = `
   <div class='meal-show'>

   
 
    <div class="meal-info row">
 
        <img class='meal-img' src=${strMealThumb}  />
        <ul>
        ${mealIngredient.map((item) => `<li> ${item} </li>`).join('')}
     </ul>
     </div>
        <div class="meal-des row">
        <div class='meal-des__sort' >
              <h2 class='meal-title'>${strMeal}</h2>
            <span> <strong>Category: </strong>  ${strCategory}  </span>
            <span> <strong>Country: </strong>  ${strArea}  </span>
            <span> <strong>Tags: </strong>  ${strTags}  </span>
        </div>
        <p class='meal-desc__text' > ${strInstructions} </p>
     </div>
   </div>
   <div className="video">
   <iframe width="560" height="315"
   src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"
   frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=false 
   ></iframe>
   
   </div>
   `;

  showMealSection.innerHTML = innerHTML;
  console.log(mealIngredient);
};

const fetchData = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res) => res.json())
    .then((data) => {
      // Do Something here
      console.log(data);
      showMeal(data);
    });
  // .catch((err) => alert('something was wrong! Try again later'));
};

btnGetMeal.addEventListener('click', () => {
  fetchData();
});
