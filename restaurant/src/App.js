import React, { useState } from "react";
import MealList from "./component/MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState('');

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=88cbb41354b04d13858d7f377e338113&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
