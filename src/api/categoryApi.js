
import axios from "axios";

const BASE_URL = "http://localhost:1337/api/categories";
const TOKEN = "8ebef3a206799c691c0464a4fd0f1c57587c6feb674d469ccf7eb847094c5eba8394e50e8b2cdedb4e420ba47be0131196cc6a04ccea5cbbad07b126a3c5bcfb9ba66ad9e678972ac115ddf3827b9c32c45d63fdf365410cca2f511a4ee70c77d4295e679a9922e4ddad30d391b7e76da160628d85f45c1a5ca150ff32024e36"; // Replace if dynamic token is needed

// Create a new category
export async function createCategory(data) {
  try {
    const response = await axios.post(BASE_URL, data, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message || "Failed to create category. Please try again later."
    );
  }
}

// Fetch all categories
export async function getCategories() {
  try {
    const response = await axios.get(`${BASE_URL}?populate=*`, 
     
    );
    console.log(response.data);
    return response.data.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message || "Failed to fetch categories. Please try again later."
    );
  }
}

// Update an existing category
export async function updateCategory(id, data) {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message || "Failed to update category. Please try again later."
    );
  }
}

// Delete a category
export async function deleteCategory(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message || "Failed to delete category. Please try again later."
    );
  }
}
