import React, { useState } from "react";

function Checkout() {
  const [checkoutDetails, setCheckoutDetails] = useState({
    name: "",
    address: "",
    email: "",
    paymentMethod: "Credit Card",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutDetails({
      ...checkoutDetails,
      [name]: value,
    });
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    const { name, address, email, paymentMethod } = checkoutDetails;

    if (!name || !address || !email || !paymentMethod) {
      alert("Please fill in all fields!");
      return;
    }

    localStorage.removeItem('cart');
    alert("Your order has been successfully placed!");
    setCheckoutDetails({
      name: "",
      address: "",
      email: "",
      paymentMethod: "Credit Card",
    });
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="text-center p-8 bg-yellow-50 flex items-center justify-center md:p-1">
          <section className="text-center p-4 w-full">
            <h2 className="text-4xl font-semibold text-yellow-900 mb-4">Checkout</h2>
            <form
              onSubmit={handleCheckoutSubmit}
              className="mt-6 p-4 bg-white rounded shadow-lg"
            >
              <input
                type="text"
                name="name"
                value={checkoutDetails.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="mb-2 p-2 border border-lime-500 rounded w-full"
              />
              <textarea
                name="address"
                value={checkoutDetails.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="mb-2 p-2 border border-lime-500 rounded w-full"
                rows="3"
              />
              <input
                type="email"
                name="email"
                value={checkoutDetails.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="mb-2 p-2 border border-lime-500 rounded w-full"
              />
              <select
                name="paymentMethod"
                value={checkoutDetails.paymentMethod}
                onChange={handleInputChange}
                className="mb-2 p-2 border border-lime-500 rounded w-full"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="UPI">UPI</option>
              </select>
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
              >
                Confirm Order
              </button>
            </form>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-yellow-900 text-white p-4 text-center">
        <p>© 2024 EchoShelf. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Checkout;
