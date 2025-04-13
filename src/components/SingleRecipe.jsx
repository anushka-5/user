// import { useContext, useState } from "react";
// import Context from "../utils/context";
// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import RelatedRecipes from "./RelatedRecipes";
// import {
//     FaFacebookF,
//     FaTwitter,
//     FaInstagram,
//     FaLinkedinIn,
//     FaPinterest,
//     FaCartPlus,
// } from "react-icons/fa";
// import "./SingleRecipe.css";

// const SingleRecipe = () => {
//     const [quantity, setQuantity] = useState(1);
//     const { id } = useParams();
//     const { handleAddToCart } = useContext(Context);
//     const { data } = useFetch(`/api/recipes?populate=*&[filters][id]=${id}`);

//     const decrement = () => {
//         setQuantity((prevState) => (prevState === 1 ? 1 : prevState - 1));
//     };
//     const increment = () => {
//         setQuantity((prevState) => prevState + 1);
//     };

//     if (!data) return;
//     const recipe = data?.data?.[0]?.attributes;

//     return (
//         <div className="single-recipe-main-content">
//             <div className="layout">
//                 <div className="single-recipe-page">
//                     <div className="left">
//                         <img
//                             src={
//                                 process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                                 recipe.image.data[0].attributes.url
//                             }
//                         />
//                     </div>
//                     <div className="right">
//                         <span className="name">{recipe.title}</span>
//                         <span className="price">&#8377;{recipe.price}</span>
//                         <span className="desc">{recipe.description}</span>

//                         <div className="cart-buttons">
//                             <div className="quantity-buttons">
//                                 <span onClick={decrement}>-</span>
//                                 <span>{quantity}</span>
//                                 <span onClick={increment}>+</span>
//                             </div>
//                             <button
//                                 className="add-to-cart-button"
//                                 onClick={() => {
//                                     handleAddToCart(data?.data?.[0], quantity);
//                                     setQuantity(1);
//                                 }}
//                             >
//                                 <FaCartPlus size={20} />
//                                 ADD TO CART
//                             </button>
//                         </div>

//                         <span className="divider" />
//                         <div className="info-item">
//                             <span className="text-bold">
//                                 Category:{" "}
//                                 <span>
//                                     {
//                                         recipe.categories.data[0].attributes
//                                             .title
//                                     }
//                                 </span>
//                             </span>
//                             <span className="text-bold">
//                                 Share:
//                                 <span className="social-icons">
//                                     <FaFacebookF size={16} />
//                                     <FaTwitter size={16} />
//                                     <FaInstagram size={16} />
//                                     <FaLinkedinIn size={16} />
//                                     <FaPinterest size={16} />
//                                 </span>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//                 <RelatedRecipes
//                     productId={id}
//                     categoryId={recipe.categories.data[0].id}
//                 />
//             </div>
//         </div>
//     );
// };

// export default SingleRecipe;
// import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux-store/slices/cartSlice";

const SingleRecipe = ({ recipe }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addToCart({
          id: recipe.id,
          title: recipe.title,
          price: recipe.price,
          img: recipe.img,
      }));
  };
  

    return (
        <div className="recipe-card">
            <h4>{recipe.title}</h4>
            {recipe.img && (
                <img
                    src={`http://localhost:1337${recipe.img.url}`}
                    alt={recipe.title}
                    style={{ width: "150px", height: "100px" }}
                />
            )}
            <p>Price: ₹{recipe.price}</p>
            <p>Description: {recipe.desc}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default SingleRecipe;
