import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { clearCart } from '../redux-store/slices/cartSlice'; // If you have a clearCart action
// import './Checkout.css';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    
    alert("Order placed successfully! We will deliver soon.");
    navigate('/'); 
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-content">
        {/* Left: Billing Info */}
        <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Billing Details</h3>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />
          <input type="tel" placeholder="Phone Number" required />
          <div className="payment-method">
            <label>
              <input type="radio" checked readOnly />
              Cash on Delivery
            </label>
          </div>
        </form>

        {/* Right: Order Summary */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} x {item.quantity} = ₹{item.price * item.quantity}
                </li>
              ))}
            </ul>
          )}
          <h4>Total: ₹{total}</h4>
          <button onClick={handlePlaceOrder}>Place Order (COD)</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;