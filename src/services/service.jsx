import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Konfigurasi axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// PRODUCTS CRUD
export const productAPI = {
  // GET - Menampilkan semua produk
  getAll: async () => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // GET - Menampilkan produk berdasarkan ID
  getById: async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  // POST - Menambah produk baru
  create: async (productData) => {
    try {
      const response = await api.post('/products', productData);
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  // PUT - Mengubah data produk
  update: async (id, productData) => {
    try {
      const response = await api.put(`/products/${id}`, productData);
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  // DELETE - Menghapus produk
  delete: async (id) => {
    try {
      const response = await api.delete(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }
};

// CART CRUD
export const cartAPI = {
  // GET - Menampilkan semua item di keranjang
  getAll: async () => {
    try {
      const response = await api.get('/cart');
      return response.data;
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error;
    }
  },

  // POST - Menambah item ke keranjang
  addItem: async (cartItem) => {
    try {
      const response = await api.post('/cart', cartItem);
      return response.data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  },

  // PUT - Mengubah item di keranjang
  updateItem: async (id, cartItem) => {
    try {
      const response = await api.put(`/cart/${id}`, cartItem);
      return response.data;
    } catch (error) {
      console.error('Error updating cart item:', error);
      throw error;
    }
  },

  // DELETE - Menghapus item dari keranjang
  removeItem: async (id) => {
    try {
      const response = await api.delete(`/cart/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  }
};

export default api;
