import React, { useState, useEffect } from 'react';
import './Product.css';
import { productAPI, cartAPI } from '../../services/api';

// Fallback product data (digunakan saat json-server tidak jalan)
const FALLBACK_PRODUCTS = [
  { id: 1, name: 'Cargo Essentials', price: 89, category: 'Pants', image: 'cargo.jpg', description: 'Celana cargo dengan banyak kantong', stock: 15 },
  { id: 2, name: 'Oversized T-Shirt', price: 95, category: 'Shirts', image: 'oversized.jpg', description: 'Kaos oversized berkualitas', stock: 20 },
  { id: 3, name: 'Striped Button Shirt', price: 45, category: 'Shirts', image: 'stripped.jpg', description: 'Kemeja berstrip elegan', stock: 12 },
  { id: 4, name: 'Custom Oversized', price: 42, category: 'T-Shirt', image: 'over.jpg', description: 'Kaos oversized custom', stock: 8 },
  { id: 5, name: '(UN)Wasted Hoodie', price: 79, category: 'Jackets', image: 'hoodie.jpg', description: 'Hoodie berkualitas premium', stock: 18 },
  { id: 6, name: 'Oxford Button Up', price: 65, category: 'Shirts', image: 'oxford.jpg', description: 'Kemeja oxford premium', stock: 25 },
  { id: 7, name: 'Leather Jacket', price: 129, category: 'Jackets', image: 'Leatherj.jpg', description: 'Jaket kulit asli', stock: 5 },
  { id: 8, name: 'Jogger Pants', price: 59, category: 'Pants', image: 'jogger.jpg', description: 'Celana jogger nyaman', stock: 22 }
];

const CART_LS_KEY = 'urbone_cart_fallback';

const getSavedCart = () => {
  try {
    const saved = localStorage.getItem(CART_LS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
};

const saveCartLocal = (cart) => {
  try {
    localStorage.setItem(CART_LS_KEY, JSON.stringify(cart));
  } catch (e) {}
};

function Product() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load produk dari API saat component mount
  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await productAPI.getAll();
      setProducts(data);
      setError(null);
    } catch (err) {
      console.error('Failed to load products:', err);
      // Gunakan fallback products saat API gagal
      setProducts(FALLBACK_PRODUCTS);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  const loadCart = async () => {
    try {
      const data = await cartAPI.getAll();
      setCart(data);
    } catch (err) {
      console.error('Failed to load cart:', err);
      // Gunakan fallback localStorage cart
      const local = getSavedCart();
      setCart(local);
    }
  };

  const addToCart = async (product) => {
    try {
      const cartItem = {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      };
      
      const newItem = await cartAPI.addItem(cartItem);
      setCart([...cart, newItem]);
      alert(`${product.name} Added to cart!`);
    } catch (err) {
      console.error('Failed to add to cart:', err);
      // Fallback: tambah ke local cart dan simpan
      const cartItemLocal = {
        id: Date.now(),
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      };
      const newCart = [...cart, cartItemLocal];
      setCart(newCart);
      saveCartLocal(newCart);
      alert(`${product.name} added to cart!`);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await cartAPI.removeItem(id);
      const updatedCart = cart.filter(item => item.id !== id);
      setCart(updatedCart);
      alert('Product removed from cart');
    } catch (err) {
      console.error('Failed to remove from cart:', err);
      // Fallback: hapus dari local cart
      const updatedCart = cart.filter(item => item.id !== id);
      setCart(updatedCart);
      saveCartLocal(updatedCart);
      alert('Product removed from cart');
    }
  };

  const updateCartItem = async (id, quantity) => {
    try {
      const updatedItem = await cartAPI.updateItem(id, { quantity });
      const updatedCart = cart.map(item => 
        item.id === id ? updatedItem : item
      );
      setCart(updatedCart);
    } catch (err) {
      console.error('Failed to update cart:', err);
      // Fallback: update local cart
      const updatedCart = cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      setCart(updatedCart);
      saveCartLocal(updatedCart);
    }
  };

  return (
    <section id="product" className="product">
      <div className="section-header">
        <h2 className="section-title">OUR COLLECTION</h2>
        <p className="section-subtitle">Explore our latest products.</p>
      </div>

      {loading && <p className="loading">Loading product...</p>}
      {error && <p className="error">{error}</p>}

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <div className="product-image">
                <img 
                  src={require(`../../Assets/${product.image}`)} 
                  alt={product.name}
                  className="product-img"
                />
              </div>
            </div>
            <div className="product-details">
              <p className="product-category">{product.category}</p>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? 'OUT OF STOCK' : 'ADD TO CART'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-badge">
        <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
          Cart ({cart.length})
        </button>
      </div>

      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <div className="cart-header">
              <h2>SHOP CART ({cart.length})</h2>
              <button className="close-btn" onClick={() => setShowCart(false)}>✕</button>
            </div>
            {cart.length === 0 ? (
              <p className="empty-cart">Ur cart is empty.</p>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <img 
                        src={require(`../../Assets/${item.image}`)} 
                        alt={item.name}
                        className="item-img"
                        onError={(e) => {e.target.style.display = 'none'}}
                      />
                      <div className="item-details">
                        <p className="item-name">{item.name}</p>
                        <p className="item-price">$ {item.price.toLocaleString('id-ID')}</p>
                      </div>
                    </div>
                    <div className="item-controls">
                      <input 
                        type="number" 
                        min="1" 
                        value={item.quantity}
                        onChange={(e) => updateCartItem(item.id, parseInt(e.target.value))}
                        className="qty-input"
                      />
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                <div className="cart-footer">
                  <button className="checkout-btn">CHECKOUT</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Product;