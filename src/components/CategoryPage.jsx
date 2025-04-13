import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [ category, setCategory] = useState(null);
  useEffect(() => {
    const fetchRecipesByCategory = async () => {//category slice
      try {
        const response = await fetch(`http://localhost:1337/api/categories/${categoryId}?populate=*`);
        
        

        const data = await response.json();

      // console.log(data.data.title)
         setRecipes(data.data.recipes);
         setCategory(data.data);
     

        setLoading(false);
      } catch (err) {
        console.error('Error fetching recipes:', err);
        setError('There was an issue fetching the recipes.');
        setLoading(false);
      }
    };

    fetchRecipesByCategory();
  }, [categoryId]);

  return (
    <div>
      <h2>{category?.title}</h2>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="recipes-list">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div className="recipe-card" key={recipe.id}>
                <h3>{recipe.title}</h3>
                {/* Render image */}
                {recipe.img && recipe.img.url && (
                  <img src={recipe.img.url} alt={recipe.title} />
                )}
                <p>{recipe.desc}</p> {/* Render description */}
                <p>Price: ${recipe.price}</p> {/* Render price */}
              </div>
            ))
          ) : (
            <p>No recipes found for this category.</p>
          )}
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CategoryPage;