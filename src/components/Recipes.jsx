

// import React from "react";
// import SingleRecipe from "./SingleRecipe";

// const Recipes = ({ recipes }) => {
//   return (
//     <div className="recipes">
//       {recipes.length > 0 ? (
//         recipes.map((recipe) => <SingleRecipe key={recipe.id} recipe={recipe} />)
//       ) : (
//         <p>No recipes available</p>
//       )}
//     </div>
//   );
// };

// export default Recipes;
import React, { useEffect } from "react";
import SingleRecipe from "./SingleRecipe";
import { fetchRecipesThunk } from "../redux-store/slices/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
const Recipes = () => {
    const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipesThunk());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="recipes">
      {recipes.length > 0 ? (
        recipes.map((recipe) => <SingleRecipe key={recipe.id} recipe={recipe} />)
      ) : (
        <p>No recipes available</p>
      )}
    </div>
  );
};

export default Recipes;
