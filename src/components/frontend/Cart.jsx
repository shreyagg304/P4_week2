import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart items from localStorage or default to empty array
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Handle removing an item from the cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  // Handle clearing the entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // Clear cart from localStorage
  };

  return (
    <div className="h-screen flex flex-col bg-yellow-50">
      {/* Main Content */}
      <div className="flex-grow">
        <section className="text-center p-8">
          <h2 className="text-4xl font-semibold text-yellow-900 mb-4">Your Cart</h2>
          <p className="text-xl text-gray-600">Review your selected books below.</p>
        </section>

        {/* Cart Items Section */}
        <section className="p-8">
          <h3 className="text-3xl font-bold text-yellow-900 mb-6">Cart Items</h3>
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md mb-2"
                  />
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-gray-600">Author: {item.author}</p>
                  <p className="text-gray-600">Genres: {item.genres.join(", ")}</p>
                  <p className="font-bold text-yellow-900">{item.price}</p>
                  <div className="flex space-x-5 mt-4 justify-center">
                    <button
                      onClick={() => removeFromCart(item.id)} // Remove item from cart
                      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 focus:ring"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </section>

        {/* Cart Summary and Checkout */}
        <section className="p-8">
          {cart.length > 0 && (
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-2xl font-bold text-yellow-900 mb-4">Cart Summary</h4>
                <p className="text-lg text-gray-600">Total Items: {cart.length}</p>
                <p className="text-lg text-gray-600">
                  Total Price: $
                  {cart
                    .reduce((total, item) => total + parseFloat(item.price.slice(1)), 0)
                    .toFixed(2)}
                </p>
              </div>
              <div className="flex flex-wrap gap-8 justify-end">
                <Link to="/checkout">
                  <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-yellow-800 focus:ring">
                    Checkout
                  </button>
                </Link>
                <button
                  onClick={clearCart} // Clear cart
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 focus:ring"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-yellow-900 text-white p-4 text-center">
        <p>© 2024 EchoShelf. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Cart;
