// src/redux-store/slices/orderSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder, fetchUserOrders } from "../../api/orderApi"; // Import fetchUserOrders

// Create order thunk
export const createOrderThunk = createAsyncThunk(
    "order/createOrder",
    async ({orderData, recipeIds}, { rejectWithValue  }) => {
        try {

            for(let i = 0; i<recipeIds.length; i++){
                const recipeId = recipeIds[i];
                orderData.recipe = recipeId;
                await createOrder(orderData);
                console.log("its done")

            }
             
        } catch (err) {
            console.log(err.message)
            return rejectWithValue(err.message);

        }
    }
);

// Fetch user orders thunk
export const fetchUserOrdersThunk = createAsyncThunk(
    "order/fetchUserOrders",
    async (userId, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetchUserOrders(userId, token);
            return response;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createOrderThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createOrderThunk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.orders.push(action.payload); // Add the newly created order to the list
            })
            .addCase(createOrderThunk.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchUserOrdersThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserOrdersThunk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.orders = action.payload; // Replace existing orders with fetched ones
            })
            .addCase(fetchUserOrdersThunk.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default orderSlice.reducer;