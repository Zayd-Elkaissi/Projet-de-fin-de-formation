import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Resier() {
  const [imageUrl, setImageUrl] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [veggies, setVeggies] = useState([]);
  const [menu, setMenu] = useState([]);


  const getVeggies = async () => {
    const getData = localStorage.getItem("veggies");

    // if (getData && getData !== "undefined") {
    //   setVeggies(JSON.parse(getData));
    // } else {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=ec176c60db384bfdb8eb7a2b149f063b&tags=vegetarian&number=10`
      );
      let data = await resp.json();
      let recipes = data.recipes.map((element) => {
        const dataFilter = btoa(element.dishTypes[0]).toString().replaceAll('=', '');
        element.dataFilter = dataFilter

        return element
      })
      console.log(recipes)
      setVeggies(data.recipes);
      // localStorage.setItem("veggies", JSON.stringify(data.recipes));
     // console.log(data.recipes);
    // }
  };

  useEffect(() => {
    getVeggies();
  }, []);


  return (
    
    <section id="menu" className="menu section-bg">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Menu</h2>
        <p>Check Our Tasty Menu</p>
      </div>

      <div className="row" data-aos="fade-up" data-aos-delay="100">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="menu-flters">
            <li data-filter="*" className="filter-active">All</li>
        {veggies.map(({ id, dishTypes, dataFilter}) => (
          
            <li key={id} data-filter={"." + dataFilter}>{dishTypes[0]}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row d-flex  menu-container" data-aos="fade-up" data-aos-delay="200">
        {veggies.map(({ title, id, image, sourceUrl, readyInMinutes, dataFilter}) => (
          <div key={id} className={"col-lg-6 menu-item " + dataFilter}>
            <img src={image} className="menu-img" alt={image} />
            <div className="menu-content">
              <a target="blank" href={sourceUrl}>{title}</a><span className=""><i id="right" className="bx bx-chevron-right"></i></span>
            </div>
            <div className="menu-ingredients">
              Preparation time : {readyInMinutes} minutes
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  );
}
