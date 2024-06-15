import axios from 'axios';

const getUsageDetails = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:5000/usage/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching usage details', error);
    throw error;
  }
};

export { getUsageDetails };
