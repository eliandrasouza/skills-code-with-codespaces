import axios from 'axios';

const API_BASE_URL = 'https://api.seuservidor.com'; // Substitua pela URL da sua API

export const registerSupplier = async (supplierData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/suppliers/register`, supplierData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const loginSupplier = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/suppliers/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const recoverPassword = async (email) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/suppliers/recover-password`, { email });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getSalesData = async (supplierId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/suppliers/${supplierId}/sales`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};