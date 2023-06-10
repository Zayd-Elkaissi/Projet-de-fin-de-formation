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


  return (
    
    <div className="col-lg-6 menu-item">
    <img src={imageUrl} className="menu-img" alt="" />
    <div className="menu-content">
    <a target= "blank" href={meal.sourceUrl}>{meal.title}</a><span className=""><i id="right" className="bx bx-chevron-right"></i></span>
    </div>
    <div className="menu-ingredients">
    Preparation time : {meal.readyInMinutes} minutes
    </div>
  </div>



  
  );
}
