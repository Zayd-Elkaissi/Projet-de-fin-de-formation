import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Footer from './layout/Footer';

function Favorit() {
    const [favorites, setFavorites] = useState([]);

    function getfavorite() {
        
        axios.get('http://127.0.0.1:8000/api/favorite')
            .then((res) => {
                console.log(res)
                setFavorites(res.data)
            })
        // setFavorites(true);
    };

     function Remov(id) {
        axios.delete("http://127.0.0.1:8000/api/favorite/" + id).then((res) => setFavorites(res.data.favorites))
     }

        getfavorite()
    // const Starticon = (item) => {
    //     console.log(item);
    //     return datafavorite.some((fav)=>fav.quote === quote);
    //   }

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
                            <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                            <li><Link className="nav-link scrollto" to="/">Menu</Link></li>
                            <li><Link className="nav-link scrollto" to="/">Macros</Link></li>
                            <li><Link className="nav-link scrollto" to="/favorit">Favorit</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link class="dropdown-item" to="/login">Login</Link></li>
                            <li><Link class="dropdown-item" to="/registre">Registre</Link></li>
                            {/* {if(User){ */}
                            <li><Link onClick={hundelLogout} class="dropdown-item" to="/">Logout</Link></li>
                            {/* };
                         } */}

                        </ul>
                    </div>
                </div>
            </header>
            {/*  -- End Header --  */}

            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="d-flex align-items-center hero">
                <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>Welcome to your <span>favourites</span></h1>
                            {/* <h2>Delivering great food for more than 18 years!</h2> */}

                            <div className="btns">
                                <a href="#favourite" className="btn-menu animated fadeInUp scrollto">Our favourite</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- End Hero --  */}

            <main id="main">
                <section id="macros" className="menu section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Favorites</h2>
                            <p>Check Our favourites</p>
                        </div>


                        <div id="" class="carousel slide" >
                            <div class="item row">
                                {favorites.map((item) => (
                                    <div class="col-sm-4  item">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src={item.image} class="img-fluid" alt={item} />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>{item.name}</h4>
                                                <p class="item-price">Preparation time : <b>{item.timePreparation}</b> minutes</p>
                                                {/* <a target="blank" href={item} class="btn btn-warning m-2">Details</a> */}
                                                <button target= "blank" onClick={() => Remov(item.id)} class="btn btn-warning">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>




                    </div>
                </section>


            </main>
            {/* -- End #main --  */}

            {/*  ======= Footer ======= */}
            <Footer />

            <div id="preloader"></div>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        </body>
    );
}

export default Favorit;