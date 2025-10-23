import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { cart = [], total = 0 } = state || {};

    const [showModal, setShowModal] = useState(false);

    const handleConfirmPurchase = () => {
        // Show the popup modal
        setShowModal(true);
    };

    const handleFinish = () => {
        setShowModal(false);
        navigate("/shop");
    };

    return (
        <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8 relative">
            <h1 className="text-4xl font-bold mb-8 tracking-tight">Checkout</h1>

            {cart.length === 0 ? (
                <>
                    <p className="text-gray-600 mb-6">Your cart is empty.</p>
                    <button
                        onClick={() => navigate("/shop")}
                        className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
                    >
                        Go Back to Shop
                    </button>
                </>
            ) : (
                <div className="w-full max-w-3xl">
                    <ul className="divide-y divide-gray-200 mb-8">
                        {cart.map((item) => (
                            <li key={item.id} className="py-4 flex justify-between">
                                <p>{item.name}</p>
                                <p>
                                    ${item.price} × {item.qty}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between font-semibold text-xl mb-8">
                        <p>Total:</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <button
                        onClick={handleConfirmPurchase}
                        className="w-full py-4 bg-black text-white rounded-md hover:bg-gray-800 transition"
                    >
                        Confirm Purchase
                    </button>
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 max-w-sm text-center space-y-6 shadow-lg">
                        <h2 className="text-2xl font-bold">Purchase Completed!</h2>
                        <p>Thank you for your order. Your purchase was successful.</p>
                        <button
                            onClick={handleFinish}
                            className="px-6 py-3 bg-black text-black rounded-md hover:bg-gray-800 transition"
                        >
                            Finish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
