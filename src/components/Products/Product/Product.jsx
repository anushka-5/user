import "./Product.css";

import prod from "../../../assets/products/food-prod-5.webp";

const Product = () => {
    return (
        <div className="recipe-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="recipe-details">
                <span className="name">Strawberry Toast  - </span>
                <span className="price">&#8377;1200</span>
            </div>
        </div>
    );
};

export default Product;