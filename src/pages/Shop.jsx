import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Bike1 from "../assets/images/prod1.jpg";
import Bike2 from "../assets/images/prod2.jpg";
import Gear1 from "../assets/images/prod3.jpg";
import Accessory1 from "../assets/images/prod4.jpg";

export default function Shop() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Elite Rear Suspension", price: 1499, img: Bike1 },
    { id: 2, name: "Pro Saddlepost", price: 1199, img: Bike2 },
    { id: 3, name: "Aero Performance Helmet", price: 149, img: Gear1 },
    { id: 4, name: "Precision Hub", price: 49, img: Accessory1 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart, total } });
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col md:flex-row pt-100 pb-10">
      {/* SHOP SECTION */}
      <section className="flex-1 pt-32 md:pt-20 px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Shop</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore precision-engineered bicycles, gear, and accessories built
            for performance and style.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-gray-700 transition-colors">
                  {item.name}
                </h2>
                <p className="text-gray-500 mb-4">${item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="px-6 py-2 bg-black text-white border border-black rounded-full hover:bg-gray-800 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CART SIDEBAR */}
      <aside className="md:w-96 w-full border-l border-gray-200 bg-gray-50 p-8 md:sticky md:top-24 md:h-[calc(100vh-6rem)] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-6">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b border-gray-200 pb-3"
                >
                  <div className="text-left">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} × {item.qty}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-6 h-6 flex bg-white items-center justify-center border rounded hover:bg-gray-200 transition"
                    >
                      −
                    </button>
                    <span className="w-6 text-center">{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-6 h-6 flex items-center justify-center border rounded hover:bg-gray-200 transition"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-3 text-red-500 hover:text-red-700 transition text-sm"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gray-300 pt-4">
              <div className="flex justify-between mb-4">
                <p className="font-semibold">Total:</p>
                <p className="font-semibold">${total.toFixed(2)}</p>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
