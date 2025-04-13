// src/api/orderApi.js
import axios from "axios";

const BASE_URL = "http://localhost:1337/api/orders";

export async function createOrder(orderData) {
    console.log(orderData)
    try {
        // const token = localStorage.getItem("token");
        const token = import.meta.env.VITE_STRIPE_DEV_APP_KEY
        let body = { data: {...orderData} }
        console.log("body",body)
        const response = await axios.post(
            BASE_URL,
            body,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data;
    } catch (err) {
        console.log(err.message)
        throw new Error(
            err?.response?.data?.error?.message || "Failed to place order"
        );
    }
}

export async function fetchUserOrders(userId, token) {
    try {
        const response = await axios.get(
            `${BASE_URL}?filters[user][id][$eq]=${userId}&sort=createdAt:desc`, // Added sorting by creation date
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data; // Assuming Strapi returns an array of order objects directly in data
    } catch (err) {
        throw new Error(
            err?.response?.data?.error?.message || "Failed to fetch orders"
        );
    }
}