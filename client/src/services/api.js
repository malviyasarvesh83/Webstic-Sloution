import axios from 'axios';

const URL = 'http://localhost:8080';

export const featuredCollection = async () => {
    try {
        return await axios.get(`${URL}/featuredCollection`);
    } catch (error) {
        console.log('Error:', error.message);
        return error.response.data;
    }
}

export const embroideriesCollection = async () => {
    try {
        return await axios.get(`${URL}/embroideries`);
    } catch (error) {
        console.log('Error:', error.message);
        return error.response.data;
    }
}

export const jacketCollection = async () => {
    try {
        return await axios.get(`${URL}/jacket`);
    } catch (error) {
        console.log('Error:', error.message);
        return error.response.data;
    }
}

export const jilbabCollection = async () => {
    try {
        return await axios.get(`${URL}/jilbab`);
    } catch (error) {
        console.log('Error:', error.message);
        return error.response.data;
    }
}

export const quickViewDetails = async (id) => {
    try {
        return await axios.get(`${URL}/quickView/${id}`);
    } catch (error) {
        console.log('Error:', error.message);
        return error.response.data;
    }
}

export const casualQuickViewDetails = async (id) => {
    try {
        return await axios.get(`${URL}/embroideries/quickView/${id}`);
    } catch (error) {
        console.log('Error:', error.message);
        return error.response.data;
    }
}

export const jacketQuickViewDetails = async (id) => {
    try {
        return await axios.get(`${URL}/jacket/quickView/${id}`);
    } catch (error) {
        console.log('Error:', error.message);
        return error.response.data;
    }
}

export const jilbabQuickViewDetails = async (id) => {
    try {
        return await axios.get(`${URL}/jilbab/quickView/${id}`);
    } catch (error) {
        console.log('Error:', error.message);
        return error.response.data;
    }
}

export const sendMessageDetails = async (contact) => {
    try {
        return await axios.post(`${URL}/contact`, contact);
    } catch (error) {
        console.log('Error:', error.message);
        return error.message.data;
    }
}

export const addToCartDetails = async (id, count) => {
    try {
        return await axios.get(`${URL}/addToCart/${id}`, {
            params:{count:count}
        });
    } catch (error) {
        console.log('Error:', error.message);
        return error.message.data;
    }
}

export const casualAddToCartDetails = async (id, count) => {
    try {
        return await axios.get(`${URL}/casualAddToCart/${id}`, {
            params:{count:count}
        });
    } catch (error) {
        console.log('Error:', error.message);
        return error.message.data;
    }
}

export const jacketAddToCartDetails = async (id, count) => {
    try {
        return await axios.get(`${URL}/jacketAddToCart/${id}`, {
            params:{count:count}
        });
    } catch (error) {
        console.log('Error:', error.message);
        return error.message.data;
    }
}

export const jilbabAddToCartDetails = async (id, count) => {
    try {
        return await axios.get(`${URL}/jilbabAddToCart/${id}`, {
            params:{count:count}
        });
    } catch (error) {
        console.log('Error:', error.message);
        return error.message.data;
    }
}

export const getAllProducts = async () => {
    try {
        return await axios.get(`${URL}/getAllProducts`);
    } catch (error) {
        console.log('Error:', error.message);
        return error.message.data;
    }
}

export const removeCartItem = async (id) => {
    try {
        return await axios.delete(`${URL}/removeCartItem/${id}`);
    } catch (error) {
        console.log('Error:', error.message);
        return error.message.data;
    }
}

export const increaseQty = async (id,qty) => {
    try {
        return await axios.get(`${URL}/increaseQty/${id}`, {
            params:{qty:qty}
        });
    } catch (error) {
        console.log('Error:', error.message);
        return error.message.data;
    }
}

export const decreaseQty = async (id,qty) => {
    try {
        return await axios.get(`${URL}/increaseQty/${id}`, {
            params:{qty:qty}
        });
    } catch (error) {
        console.log('Error:', error.message);
        return error.message.data;
    }
}

export const successOrderDetails = async (order) => {
    try {
        return await axios.post(`${URL}/payment/checkout`, order);
    } catch (error) {
        console.log('Error:', error.message);
        return error.message.data;
    }
}