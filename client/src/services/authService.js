import axios from 'axios';

const loginWithGoogle = async () => {
  try {
    const response = await axios.get('http://localhost:5000/auth/google');
    return response.data;
  } catch (error) {
    console.error('Error logging in with Google', error);
    throw error;
  }
};

export { loginWithGoogle };
