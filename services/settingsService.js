// services/settingsService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://expogazette.com/api', // Replace with your API base URL
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  // Fetch specific setting by key for the frontend
  async getSiteSetting(key) {
    try {
      const response = await apiClient.get(`/frontend/settings/${key}`);
     
      return response.data;
    } catch (error) {
      console.error(`Error fetching setting with key ${key}:`, error);
      throw error;
    }
  },

  
};
