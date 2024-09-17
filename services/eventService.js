// services/apiService.js
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
 async getUserListings() {
        try {
            if (process.client) { // Check if running on the client-side
                const token = localStorage.getItem('access_token');
                if (!token) {
                    throw new Error('Access token not found'); // Handle case where token is missing
                }
                apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set Authorization header for authenticated requests
            }

            const response = await apiClient.get('/user/listings');
            return response.data.listings;
        } catch (error) {
            console.error('Error fetching user listings:', error);
            throw error; // Ensure error is re-thrown or handled appropriately
        }
    },
  async getEvents() {
    try {
      const response = await apiClient.get('/events');
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  async getEvent(id) {
    try {
      const response = await apiClient.get(`/events/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching event with ID ${id}:`, error);
      throw error;
    }
  },
  async getEventDetails(slug) {
    try {
      const response = await apiClient.get(`/event-details/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching event with ID ${slug}:`, error);
      throw error;
    }
  },
  async getCountries() {
    try {
      const response = await apiClient.get('/countries');  
      return response.data;
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw error;
    }
  },
  async getHomePageCategories() {
    try {
      const response = await apiClient.get('/get-index-categories');  
   
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },
  async getCategories() {
    try {
      const response = await apiClient.get('/get-categories');  
   
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  // Fetch venues by country ID
  async getVenuesByCountry(countryId) {
    try {
      const response = await apiClient.get(`/get-venue?country_id=${countryId}`);

      return response.data;
    } catch (error) {
      console.error(`Error fetching venues for country ID ${countryId}:`, error);
      throw error;
    }
  },
  async createEvent(eventData) {
    
    try {
      const response = await apiClient.post('/events', eventData);
   
      return response.data;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },

  async updateEvent(id, eventData) {
    try {
      const response = await apiClient.put(`/events/${id}`, eventData);
      return response.data;
    } catch (error) {
      console.error(`Error updating event with ID ${id}:`, error);
      throw error;
    }
  },
  async getEventsByCategory(categoryId, page = 1) {
    try {
      const response = await apiClient.get(`/events/category/${categoryId}`, {
        params: { page }
      });
    
      return response.data;
    } catch (error) {
      console.error(`Error fetching events for category ID ${categoryId}:`, error);
      throw error; // Re-throw the error so it can be handled where the method is called
    }
  },
  async deleteEvent(eventId) {
    try {
        const token = localStorage.getItem('access_token');
        if (!token) {
            throw new Error('Access token not found');
        }
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const response = await apiClient.delete(`/events/${eventId}`);
        return response.data; // Assuming the API returns a confirmation or success message
    } catch (error) {
        console.error('Error deleting event:', error);
        throw error;
    }
}
};