
import axios from "axios";

const BASE_URL = "http://localhost:1337/api/recipes";
const TOKEN = "8ebef3a206799c691c0464a4fd0f1c57587c6feb674d469ccf7eb847094c5eba8394e50e8b2cdedb4e420ba47be0131196cc6a04ccea5cbbad07b126a3c5bcfb9ba66ad9e678972ac115ddf3827b9c32c45d63fdf365410cca2f511a4ee70c77d4295e679a9922e4ddad30d391b7e76da160628d85f45c1a5ca150ff32024e36";

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
