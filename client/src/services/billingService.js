const API_URL = 'http://localhost:5000';

export const getUsageDetails = async (userId) => {
    const response = await fetch(`${API_URL}/usage/${userId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch usage details');
    }
    return response.json();
};

export const getBillingDetails = async (userId) => {
    const response = await fetch(`${API_URL}/billing/${userId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch billing details');
    }
    return response.json();
};

export const generateInvoice = async (userId) => {
    const response = await fetch(`${API_URL}/invoice/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to generate invoice');
    }
    return response.json();
};
