import React  from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./component/Home";
import Registre from "./component/Registre";
import Login from "./component/Login";
import Favorit from "./component/Favorit";

const App= () =>{
  return (

       <>
       <BrowserRouter>
         <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/registre' element={<Registre/>}/>
         <Route path='/favorit' element={<Favorit/>}/>
         </Routes>
       </BrowserRouter>
       </>
  )
}

export default App;
