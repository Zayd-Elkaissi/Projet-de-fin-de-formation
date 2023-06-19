import React, { useState, useEffect } from "react";
import MealList from "./MealList";
import Resier from "./Resier";
import Menu from "./Menu";
import Footer from "./layout/Footer";
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';

function Home() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState('');

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=6632e51f9fd646e7b179ea2da266a4af&timeFrame=day&targetCalories=${calories}`
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

  function hundelLogout() {
    localStorage.clear()
     
  };

  return (
    <body>

      {/*  ======= Top Bar =======  */}

      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-center justify-content-md-between">

          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-phone d-flex align-items-center" data-aos="fade-right"><span>+212 642 5837 17</span></i>
          </div>
        </div>
      </div>

      {/*  ======= Header =======  */}
      <header id="header" className="fixed-top d-flex align-items-cente">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

          <h1 className="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registre">Registre</Link>
          </li>
          <li>
            <Link onClick={hundelLogout} to="/">Logout</Link>
          </li>
        </ul>
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
              <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      {/*  -- End Header --  */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8">
              <h1>Welcome to <span>Restaurantly</span></h1>
              <h2>Delivering great food for more than 18 years!</h2>

              <div className="btns">
                <div class="input-group my-4">
                  <input type="number" onChange={handleChange} class="form-control" placeholder="Calories (2000)" />
                  <a href="#macros" onClick={getMealData} class="btn btn-warning col-6" type="button">Get Daily Meal Plan</a>
                </div>
                <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
              <a href="" className="glightbox play-btn"></a>
            </div>
          </div>
        </div>
      </section>
      {/* -- End Hero --  */}

      <main id="main">


        {mealData && <MealList mealData={mealData} />}

        {/*  ======= Resier Section =======  */}
        <Resier />

        {/* ======= Specials Section =======  */}
        {/* <Menu />  */}

      </main>
      {/* -- End #main --  */}

      {/*  ======= Footer ======= */}
      <Footer />

      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </body>
  );

}
// https://chat.openai.com/share/1a6678f1-671b-4ec5-a933-ebd9a7cd83a1



export default Home;
