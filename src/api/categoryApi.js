import axios from "axios";

const BASE_URL = "http://localhost:1337/api/categories";
const TOKEN =  localStorage.getItem("token")

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