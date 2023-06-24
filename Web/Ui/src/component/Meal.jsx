import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=6632e51f9fd646e7b179ea2da266a4af&includeNutrition=false`
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
      // Number:meal.servings
     })
     setFavorites(true);
     alert("Added to favorites.")
  };

 

  return (
						<div className="col-sm-4  item">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={imageUrl} className="img-fluid" alt={imageUrl}/>
								</div>
								<div className="thumb-content">
									<h4>{meal.title}</h4>
									<p className="item-price">Preparation time : <b>{meal.readyInMinutes}</b> minutes</p>
									<a target= "blank" href={meal.sourceUrl} className="btn btn-warning m-2">Details</a>
                  <button target= "blank"  onClick={favorite} className="btn btn-warning">Favorite</button>
								</div>						
							</div>
						</div>



  
  );
}
