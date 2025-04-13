import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import categoryReducer from './slices/categorySlice';
import recipeReducer from './slices/recipeSlice'; 
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/orderSlice'
const store = configureStore({
    reducer: {
        category: categoryReducer,
        
        recipes: recipeReducer, 

        user: userReducer,
         
        cart: cartReducer,

        order: orderReducer,
    },
});

export default store;
