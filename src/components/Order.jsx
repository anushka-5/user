import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrderThunk } from "../redux-store/slices/orderSlice";
import { useNavigate } from "react-router-dom";

const Order = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems, cartSubTotal } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth); // assuming user info stored in auth

    useEffect(() => {
        if (!cartItems.length) navigate("/");
    }, [cartItems, navigate]);

    const handlePlaceOrder = () => {
        const orderPayload = {
            userId: user?.id,
            recipes: cartItems.map((item) => item.id),
            total: cartSubTotal,
            quantity: cartItems.reduce((acc, item) => acc + item.quantity, 0),
            order_status: "processing",
        };

        dispatch(createOrderThunk(orderPayload));
        navigate("/thank-you");
    };

    return (
        <div className="checkout-container">
            <h1>Order Summary</h1>
            <div className="checkout-summary">
                {cartItems.map((item) => (
                    <div key={item.id} className="checkout-item">
                        <img src={`http://localhost:1337${item.img?.url}`} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>Price: ₹{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))}
                <h2>Total: ₹{cartSubTotal}</h2>
                <p>Payment Method: <strong>Cash on Delivery</strong></p>
                <button className="checkout-button" onClick={handlePlaceOrder}>
                    Confirm Order
                </button>
            </div>
        </div>
    );
};

export default Order;