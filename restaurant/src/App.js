import React, { useState, useEffect } from "react";
import MealList from "./component/MealList";
import Resier from "./component/Resier";
import Menu from "./component/Menu";
import Footer from "./component/layout/Footer";
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Home from "./component/Home";
import Registre from "./component/Registre";
import Login from "./component/Login";
import Favorit from "./component/Favorit";

const App= () =>{
  return (

       <>
       <BrowserRouter>
       {/* <Themeprovider> */}
         <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/registre' element={<Registre/>}/>
         <Route path='/favorit' element={<Favorit/>}/>
         <Route path='/favorit' element={<Favorit/>}/>
         <Route path='/favorit' element={<Favorit/>}/>
         <Route path='/favorit' element={<Favorit/>}/>
         </Routes>
         {/* </Themeprovider> */}
       </BrowserRouter>
       </>
  )
}

export default App;
