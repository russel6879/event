import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Replace with your API base URL
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  async registerUser(userData) {
    try {
      const response = await apiClient.post('/signup', userData);
      return response.data; // Assuming API returns data upon successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },

  async login(credentials) {
    const response = await apiClient.post('/login', credentials);
    return response.data;
  },

  // Method to send OTP for password recovery
  async recoverPassword(data) {
    try {
      const response = await apiClient.post('/send-otp', data); // Make sure this matches your API endpoint
      return response.data;
    } catch (error) {
      console.error('Error sending OTP:', error);
      throw error;
    }
  },

  // Method to reset password after OTP validation
  async resetPassword(data) {
    try {
      const response = await apiClient.post('/reset-password', data); // Make sure this matches your API endpoint
      return response.data;
    } catch (error) {
      console.error('Error resetting password:', error);
      throw error;
    }
  },

  // Add other authentication-related methods as needed
  async logout() {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('No token found');
    }

    const response = await apiClient.post('/logout', {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    // Remove the token from local storage
    localStorage.removeItem('access_token');

    return response.data;
  },

  async getUserProfile() {
    try {
      if (process.client) { // Check if running on the client-side
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('Access token not found'); // Handle case where token is missing
        }
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set Authorization header for authenticated requests
      }

      const response = await apiClient.get('/profile');
      return response.data; // Adjust based on how your API returns profile data
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error; // Ensure error is re-thrown or handled appropriately
    }
  },

  async updateUserProfile(profileData) {
    try {
      if (process.client) {
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('Access token not found'); // Handle case where token is missing
        }
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set Authorization header for authenticated requests
      }

      const response = await apiClient.post('/profile', profileData);
      return response.data; // Adjust based on how your API returns profile data
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error; // Ensure error is re-thrown or handled appropriately
    }
  },
};
