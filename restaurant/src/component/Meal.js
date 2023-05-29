import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=88cbb41354b04d13858d7f377e338113&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  function favorite() {
     axios.post('http://127.0.0.1:8000/api/favorite',{ 
      foodName:meal.title,
      foodImg:imageUrl,
      timePreparation:meal.readyInMinutes,
      Number:meal.servings
     })
     setFavorites(true);

  };

  function Remov(id) {
     axios.delete("http://127.0.0.1:8000/api/favorite" + id);
     setFavorites(false);
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <button onClick={favorites ? favorite : Remov}>
      {favorites ? 'Unfavorite' : 'Favorite'}
        </button> */}
        {/* <a href={meal.sourceUrl} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> */}
      
      {/* <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg> */}
        {/* </a> */}
      <img className="rounded-t-lg" src={imageUrl} alt="recipe" />
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{meal.title}</h5>
      <ul className="instructions">
        <li className="mb-3 font-normal text-gray-700 dark:text-gray-400" >Preparation time : {meal.readyInMinutes} minutes</li>
        <li>Number of servings : {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Go to Recipe
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>

      {/* <a href={meal.sourceUrl} target="_blank">Go to Recipe</a> */}
    </div>
  );
}
