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
      Number:meal.servings
     })
     setFavorites(true);

  };

  function Remov(id) {
     axios.delete("http://127.0.0.1:8000/api/favorite" + id);
     setFavorites(false);
  }

  return (
						<div class="col-sm-4  item">
							<div class="thumb-wrapper">
								<div class="img-box">
									<img src={imageUrl} class="img-fluid" alt={imageUrl}/>
								</div>
								<div class="thumb-content">
									<h4>{meal.title}</h4>
									<p class="item-price">Preparation time : <b>{meal.readyInMinutes}</b> minutes</p>
									<a target= "blank" href={meal.sourceUrl} class="btn btn-warning m-2">Details</a>
                  <a target= "blank" href={meal.sourceUrl} class="btn btn-warning">Favori</a>
								</div>						
							</div>
						</div>
            
    
  //   <div className="col-lg-6 menu-item">
  //   <img src={imageUrl} className="menu-img" alt="" />
  //   <div className="menu-content">
  //   <a target= "blank" href={meal.sourceUrl}>{meal.title}</a><span className=""><i id="right" className="bx bx-chevron-right"></i></span>
  //   </div>
  //   <div className="menu-ingredients">
  //   Preparation time : {meal.readyInMinutes} minutes
  //   </div>
  // </div>



  
  );
}
