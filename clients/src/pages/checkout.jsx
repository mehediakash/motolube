import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [shippingMethod, setShippingMethod] = useState("standard");

  const cartItems = [
    {
      id: 1,
      title: "Aenean sed risus nec dolor volutpat",
      price: 130.0,
      quantity: 1,
      image: "product1.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      price: 90.0,
      quantity: 2,
      image: "product2.jpg",
    },
  ];

  return (
    <div className="bg-root">
      <div className="container mx-auto py-12 px-6 mt-20">
        <h1 className="text-3xl font-semibold mb-8 text-center text-white">
          Checkout
        </h1>

        {/* Form and Summary Layout */}
        <div className="lg:flex lg:gap-12">
          {/* Left: Billing and Shipping Info */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">
                Billing Information
              </h2>

              {/* Billing Form */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="90210"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Shipping Address
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="123 Main St"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Los Angeles"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    State/Province
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="CA"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Shipping Method</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="standard-shipping"
                    type="radio"
                    value="standard"
                    checked={shippingMethod === "standard"}
                    onChange={() => setShippingMethod("standard")}
                    className="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300"
                  />
                  <label
                    htmlFor="standard-shipping"
                    className="ml-3 text-sm font-medium text-gray-700"
                  >
                    Standard Shipping - Free
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="express-shipping"
                    type="radio"
                    value="express"
                    checked={shippingMethod === "express"}
                    onChange={() => setShippingMethod("express")}
                    className="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300"
                  />
                  <label
                    htmlFor="express-shipping"
                    className="ml-3 text-sm font-medium text-gray-700"
                  >
                    Express Shipping - $25.00
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Order Summary and Payment */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="ml-4">
                        <p className="text-gray-700">{item.title}</p>
                        <p className="text-gray-500">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t pt-4 space-y-4">
                <div className="flex justify-between text-gray-700">
                  <p>Subtotal</p>
                  <p>$310.00</p>
                </div>
                <div className="flex justify-between text-gray-700">
                  <p>Shipping</p>
                  <p>{shippingMethod === "standard" ? "Free" : "$25.00"}</p>
                </div>
                <div className="flex justify-between text-gray-700">
                  <p>Tax</p>
                  <p>$20.00</p>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                  <p>Total</p>
                  <p>${shippingMethod === "standard" ? "330.00" : "355.00"}</p>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">
                Payment Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="1234 5678 9123 4567"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
              <Link to={"/orderSucces"}>
                <button className="mt-6 w-full bg-yellow-500 text-white py-3 rounded-md text-lg font-medium hover:bg-yellow-600 transition">
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
