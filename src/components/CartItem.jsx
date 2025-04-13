import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";

import {removeFromCart,  } from "../redux-store/slices/cartSlice";

// import "./CartItem.css";

const CartItem = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    const updateQuantity = (e, item, type) => {
        let newQty = item.quantity;
        if (type === "inc") {
            newQty += 1;
        } else if (type === "dec" && item.quantity > 1) {
            newQty -= 1;
        }
        dispatch(updateCart({ id: item.id, quantity: newQty }));
    };

    return (
        <div className="cart-products">
            {cartItems.map((item) => (
                <div key={item.id} className="cart-product">
                    <div className="img-container">
                        <img src={item.image?.url} alt={item.name} />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.name}</span>
                        <MdClose
                            className="close-btn"
                            onClick={() => dispatch(removeFromCart(item.id))}
                        />
                        <div className="quantity-buttons">
                            <span onClick={() => updateQuantity(null, item, "dec")}>-</span>
                            <span>{item.quantity}</span>
                            <span onClick={() => updateQuantity(null, item, "inc")}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.quantity}</span>
                            <span>x</span>
                            <span className="highlight">&#8377;{item.price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;