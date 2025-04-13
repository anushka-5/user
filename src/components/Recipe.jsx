import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import "./Recipe.css";


import { fetchRecipesThunk } from "../redux-store/slices/recipeSlice";

const Recipe = () => {
    const dispatch = useDispatch();

    const { recipes, loading, error } = useSelector((state) => state.recipe);

    useEffect(() => {
       
        dispatch(fetchRecipesThunk());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="recipe-main-content">
            <div className="layout">
                <div className="recipe-title">
                    {JSON.stringify(recipes)}
                </div>
            </div>
        </div>
    );
};

export default Recipe;
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import "./Recipe.css";
// import { fetchRecipesThunk } from "../redux-store/slices/recipeSlice";

// const Recipe = () => {
//     const dispatch = useDispatch();
//     const { recipes, loading, error } = useSelector((state) => state.recipe);

//     useEffect(() => {
//         dispatch(fetchRecipesThunk());
//     }, [dispatch]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div className="recipe-main-content">
//             <div className="layout">
//                 <div className="recipe-title">
//                     {recipes.map((recipe) => (
//                         <div key={recipe.id} className="recipe-card">
//                             <div className="thumbnail">
//                                 <img
//                                     src={
//                                         import.meta.env.VITE_STRIPE_APP_DEV_URL +
//                                         recipe.img?.formats?.thumbnail?.url
//                                     }
//                                     alt={recipe.name}
//                                 />
//                             </div>
//                             <div className="recipe-details">
//                                 <span className="name">{recipe.name}</span>
//                                 {}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Recipe;
