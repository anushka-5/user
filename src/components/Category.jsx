
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategoriesThunk } from "../redux-store/slices/categorySlice";
import "../../public/css/category.css"
const Category = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="category-main-content">
      <div className="layout">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="category">
              <Link to={`/category/${category.documentId}`}>
                <h3>{category.title}</h3>
              </Link>
              {category.img && (
                <img
                  src={`http://localhost:1337${category.img.url}`}
                  alt={category.title}
                  style={{ width: "300px", height: "200px" }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
