import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 6000,
});

export const fetchProducts = async () => {
  const { data } = await api.get('api/products');
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await api.get(`api/products/${id}`);
  return data;
};
