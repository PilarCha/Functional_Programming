//start off with an array of objects
const meals = [
  {id:1, desc: 'Bagels and cheese', calories:600},
  {id:2, desc: 'Grilled cheese sandwich',calories:100}
];

//gonna use this guy later by updating the meals
const meal = {
  id:3,
  desc: 'Snack',
  calories:500
}

//shazam! here it is!
const updateMeals = [...meals, meal]

console.log("updatedMeals", updateMeals)

//just mapping it now. Passing a function that will do what objects we want to map
const updatedMeals = updateMeals.map(updateDescription)

function updateDescription(meal) {
  if (meal.id ===2) {
    return {
      ...meal,
      desc:'Early Lunch'
    };
  }
  return meal;
}

console.log("changes id 2", updatedMeals)

//exact same thing just wanted more practice
const updatedMeals3 = updatedMeals.map(updateThree)

function updateThree(meal) {
  if(meal.id===3) {
    return {
      ...meal,
      calories:3
    }
  }
  return meal
}

//you want that filter? Here you go! Anonymous function up the wazoo!
const filteredMeals = updatedMeals.filter(function(meal) {
  return meal.id !== 1
})

console.log("fun" ,filteredMeals)
