import React, { useEffect, useState, useContext } from "react";
import "../../public/css/Home.css";
import Banner from "../components/Banner";


import Category from "../components/Category";
import Recipes from "../components/Recipes";
// import { Context } from '../../utils/context';

const Home = () => {
    
     

    // const getProducts = () => {
    //     fetchDataFromApi("/api/recipes?populate=*").then((res) => {
    //         setProducts(res);
    //     });
    // };


    

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                <Category />

                    <Recipes />
                    
                </div>
            </div>
        </div>
    );
};

export default Home;