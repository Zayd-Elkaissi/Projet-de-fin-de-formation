import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;
  // 88cbb41354b04d13858d7f377e338113
  return (
    // <main id="main">
      <section id="macros" className="menu section-bg">
          <div className="container" data-aos="fade-up">
       <div className="section-title">
              <h2>Macros</h2>
              <p>Check Our Tasty Macros</p>
            </div>
       <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="menu-flters">
                  <li >Calories: {nutrients.calories.toFixed(0)}</li>
                  <li >Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                  <li >Fat: {nutrients.fat.toFixed(0)}</li>
                  <li >Protein: {nutrients.protein.toFixed(0)}</li>
                </ul>
              </div>
        </div>


     
			<div id="" className="carousel slide" >
				<div className="item row">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
        </div>
        </div>
        </div>
       </section>
    // </main>
  );
}
