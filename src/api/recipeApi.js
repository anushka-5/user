
import axios from "axios";

const BASE_URL = "http://localhost:1337/api/recipes";
const TOKEN =  localStorage.getItem("token")
// Fetch all recipes
export async function getRecipes() {
  try {
    const response = await axios.get(`${BASE_URL}?populate=img`,);
    return response.data.data;
  } catch (err) {
    throw new Error("Failed to fetch recipes. Please try again later.");
  }
}

// Create a recipe
export async function createRecipe(data) {
  try {
    const response = await axios.post(BASE_URL, data, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error("Failed to create recipe. Please try again later.");
  }
}
