import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './slices/categorySlice';
import recipeReducer from './slices/recipeSlice'; 

const store = configureStore({
    reducer: {
        category: categoryReducer,
        
        recipes: recipeReducer, 
    },
});

export default store;
