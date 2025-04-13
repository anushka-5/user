// src/components/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { createOrderThunk } from "../redux-store/slices/orderSlice"; // Import order thunk
// import { clearCart } from "../redux-store/slices/cartSlice"; // Import clearCart action

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems, cartSubTotal } = useSelector((state) => state.cart);

    const handleCheckout = async () => {
        try { const token = localStorage.getItem("token");
            const user = JSON.parse(localStorage.getItem("user"));
            const recipeIds = cartItems.map((item) => item.id);
    
            if (!token || !user) {
                alert("Please login first.");
                return;
            }
             
            const orderData = {
                user: user.id,
                paymentMode: "Cash on Delivery",
                state: "Pending",
            };
            console.log("obeject data")
            dispatch(createOrderThunk({orderData, recipeIds}));
            console.log("test")
        }
        catch (err) {
            console.log(err.message)
        }
        
      
    };

    return (
        <div className="cart-panel">
            {/* <div className="opac-layer"></div> */}
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn">
                        <MdClose />
                        <span className="text">Close</span>
                    </span>
                </div>

                {!cartItems.length ? (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No yummies in the cart.</span>
                        <button className="return-cta" onClick={() => navigate("/")}>
                            RETURN TO YUMMIES
                        </button>
                    </div>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <h4>{item.title}</h4>
                                <img
                                    src={`http://localhost:1337${item.img?.url}`}
                                    alt={item.title}
                                />
                                <p>Price: ₹{item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        ))}
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">₹{cartSubTotal}</span>
                            </div>
                            <button className="checkout-cta" onClick={handleCheckout}>
                                Checkout (Cash on Delivery)
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;