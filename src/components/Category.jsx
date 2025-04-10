
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesThunk } from "../redux-store/slices/categorySlice";
import Recipes from "./Recipes";

const Category = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);
  console.log(categories);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div key={category.id} className="category">
                <h3>{category.title}</h3>
                {category.img && (
                  <img
                    src={`http://localhost:1337${category.img.url}`}
                    alt={category.title}
                    style={{ width: "300px", height: "200px" }}
                  />
                )}
                <h4>Recipes in this category:</h4>
                {/* <Recipes recipes={category.recipes || []} /> */}
              </div>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
// import { Link } from "react-router-dom";

// const Category = () => {
//   const dispatch = useDispatch();
//   const { categories, loading, error } = useSelector((state) => state.category);

//   useEffect(() => {
//     dispatch(fetchCategoriesThunk());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="category-main-content">
//       <div className="layout">
//         <div className="category-title">
//           {categories.length > 0 ? (
//             categories.map((category) => (
//               <div key={category.id} className="category">
//                 <h3>{category.title}</h3>
//                 {category.img && (
//                   <img
//                     src={`http://localhost:1337${category.img.url}`}
//                     alt={category.title}
//                     style={{ width: "300px", height: "200px" }}
//                   />
//                 )}
//                 <Link to={`/categories/${category.id}`}>
//                   <button>View Recipes</button>
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <p>No categories available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;
