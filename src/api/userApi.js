import axios from "axios";

const API_URL = "http://localhost:1337/api"; 
const TOKEN =  localStorage.getItem("token")


// Function for user sign up
export const signUp = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/local/register`, userData);
  return response.data;
};

// Function for user login
export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/local`, credentials);
  return response.data;
};

// Function to fetch user profile
export const getUserProfile = async (jwtToken) => {
  const response = await axios.get(`${API_URL}/users/me`, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  });
  return response.data;
};