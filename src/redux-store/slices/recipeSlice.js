// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getRecipes } from "../../api/recipeApi";

// export const fetchRecipesThunk = createAsyncThunk("recipes/getRecipes", async () => {
//     return await getRecipes();
// });

// const recipeSlice = createSlice({
//     name: "recipe",
//     initialState: {
//         recipes: [],
//         loading: false,
//         error: null,
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchRecipesThunk.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchRecipesThunk.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.recipes = action.payload;
//             })
//             .addCase(fetchRecipesThunk.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             });
//     },
// });

// export default recipeSlice.reducer;
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getRecipes } from '../../api/recipeApi'; // Assuming your API file for recipes

// // Thunk for fetching recipes
// export const fetchRecipesThunk = createAsyncThunk('recipe/getRecipes', async () => {
//   return await getRecipes();
// });

// // Recipe Slice
// const recipeSlice = createSlice({
//   name: 'recipes',
//   initialState: {
//     recipes: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRecipesThunk.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchRecipesThunk.fulfilled, (state, action) => {
//         state.loading = false;
//         state.recipes = action.payload;
//       })
//       .addCase(fetchRecipesThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRecipes } from '../../api/recipeApi';

// Fetch all recipes thunk
export const fetchRecipesThunk = createAsyncThunk('recipes/getRecipes', async () => {
  return await getRecipes();
});

// Recipe slice
const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;
