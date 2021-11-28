import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home/Home";
import SingleCountryPage from "./pages/SingleCountryPage/SingleCountry";
import Tovisit from "./pages/ToVisit/Tovisit";
import Visited from "./pages/Visited/Visited";


const Routes1 = () => (
    
    <Routes>
        {/*We will render all our components here */}
        <Route path="/" element = {<Home/>} />
    </Routes>
)
export default Routes1