import React from "react";
import useFetch from "../../../hooks/useFetch";
import Recipes from "../../Recipes/Recipes";

const RelatedRecipes = ({ categoryId, recipeId }) => {
    const { data } = useFetch(
        `/api/recipes?populate=*&filters[id][$ne]=${recipeId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
    );

    return (
        <div className="related-recipes">
            <Recipes headingText="Related Recipes" recipes={data} />
        </div>
    );
};

export default RelatedRecipes;